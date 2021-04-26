var presentHour = moment().hours();
var hourNine = document.getElementById('9')
var hourTen = document.getElementById('10')
var hourEleven = document.getElementById('11')
var hourTwelve = document.getElementById('12')
var hourThirteen = document.getElementById('13')
var hourFourteen = document.getElementById('14')
var hourFifteen = document.getElementById('15')
var hourSixteen = document.getElementById('16')
var hourSeventeen = document.getElementById('17')
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
    

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

}
