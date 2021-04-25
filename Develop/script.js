
// Add ability to click into form and create then save tasks

// add ability to show date
function getDate() {
    var todaysDate = document.getElementById("currentDay");
    todaysDate.innerHTML = moment();
}

getDate();

// Add changing colors depending on where time block is 

/* var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if(!tasks) {
        tasks = "";
    }
} */

