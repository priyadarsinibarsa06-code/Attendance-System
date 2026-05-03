function markAttendance(){

    let studentName = document.getElementById("studentName").value;

    if(studentName === ""){
        alert("Please enter student name");
        return;
    }

    let attendanceList = document.getElementById("attendanceList");

    let li = document.createElement("li");

    let currentDate = new Date();

    li.innerHTML =
        "Student Name: " + studentName +
        "<br>Status: Present" +
        "<br>Date & Time: " + currentDate.toLocaleString();

    attendanceList.appendChild(li);

    document.getElementById("studentName").value = "";
}