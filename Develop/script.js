var presentHour = moment().hours();
var hourNine = document.getElementById('nine')
var hourTen = document.getElementById('ten')
var hourEleven = document.getElementById('eleven')
var hourTwelve = document.getElementById('twelve')
var hourThirteen = document.getElementById('thirteen')
var hourFourteen = document.getElementById('fourteen')
var hourFifteen = document.getElementById('fifteen')
var hourSixteen = document.getElementById('sixteen')
var hourSeventeen = document.getElementById('seventeen')
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
function timeAudit() {
    var time = $('.row');
    time.each(function() {
        var currentHour = parseInt($(this).attr('id'))
        if(currentHour < presentHour) {
            $(this).addClass('past')
        } else if (currentHour > presentHour) {
            $(this).addClass('future')
        } else {
            $(this).addClass('present')
        }
    })
}
timeAudit()
    

/* var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

}
*/
