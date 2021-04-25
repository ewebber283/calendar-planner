var tasks = {}
// Add ability to click into form and create then save tasks
$('#task').on('click',function(taskText) {
    var addTask = $('<input>')
        .text(taskText)
})

$('#saveBtn').on('click', function(){
    saveTasks();
})
// add ability to show date
function getDate() {
    var todaysDate = document.getElementById("currentDay");
    todaysDate.innerHTML = moment();
}

getDate();

// Add changing colors depending on where time block is 

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

}

