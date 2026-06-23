// Creating Array of Student Record
const students = [
    {
        name: "Nikhil Verma",
        marks: "80%",
        className: "BCA",
        address: "Motihari"
    },
    {
        name: "Kuldeep Kumar",
        marks: "70%",
        className: "12th",
        address: "Amwa, 215, Motihari"
    },
    {
        name: "Naveen Kumar",
        marks: "65%",
        className: "10th",
        address: "Noyeda, Sector 33, Delhi"
    },
    {
        name: "Kunal Kumar",
        marks: "75%",
        className: "9th",
        address: "128, Chandmari, Galli no. 3, Motihari"
    },
    {
        name: "Khushi Kumari",
        marks: "80%",
        className: "10th",
        address: "ABC, Areraj, Pin Code: 845417, Motihari"
    },
    {
        name: "Rupesh Yadav",
        marks: "90%",
        className: "BCA",
        address: "Sugalli, Main Road, Bela"
    },
    {
        name: "Ritik Kumar",
        marks: "70%",
        className: "12th",
        address: "Janpul, Main Road, City Kart Mall, Motihari"
    },
    {
        name: "Aryan Kumar",
        marks: "50%",
        className: "12th",
        address: "Raghunath Pur, Balua, Motihari"
    },
    {
        name: "Md Imran",
        marks: "70%",
        className: "10th",
        address: "Kotwa, Raja Pur, Bihar"
    },
    {
        name: "Mohan Kumar",
        marks: "60%",
        className: "9th",
        address: "Ahirauliya, Motihari"
    },
    {
        name: "Neha Kumari",
        marks: "50%",
        className: "10th",
        address: "Mumbai"
    },
    {
        name: "Daksh Kumar",
        marks: "50%",
        className: "2nd",
        address: "Agarwa, Motihari"
    }
];
// Selecting main-record div container from HTML
const mainRecord = document.querySelector(".main-record");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInpt");
// Creating function for display the all students records.
function showStudents(data) {

    mainRecord.innerHTML = "";

    data.map((student) => {

        mainRecord.innerHTML += `
        <div class="record">
            <span class="span-record">Student Name:</span>
            <span class="std-name"> ${student.name}</span>

            <p><span class="span-record">Marks:</span> ${student.marks}</p>

            <p><span class="span-record">Class:</span> ${student.className}</p>

            <p><span class="span-record">Address:</span> ${student.address}</p>
        </div>
        `;

    });

}
// When the page is loaded it will works immediately display the all students
showStudents(students);

searchBtn.addEventListener("click", function () {

    let value = searchInput.value.trim().toLowerCase();

    let result = students.filter(function(student){

        return student.name.toLowerCase().startsWith(value);

    });

    showStudents(result);

});

