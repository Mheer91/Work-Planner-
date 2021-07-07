
//Adds the time & date to the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


//This allows the timeComparison function to be called for each task block 
$(".time-block").each(timeComparison);
$(".task").each(pullSavedTasks);


//This function uses parseInt to grab the first number from the string within the time block div and compares it to the current hour
function timeComparison() {
    let taskTime = parseInt($(this).text());
    let currentHour = moment().hour();

    if (currentHour === taskTime) {
        $(".task").removeClass("future");
        $(".task").removeClass("past");
        $(".task").addClass("present");       
    } 
    else if (currentHour > taskTime) {
        $(".task").removeClass("future");
        $(".task").addClass("past");
        $(".task").removeClass("present");
    } 
    else {
        $(".task").addClass("future");
        $(".task").removeClass("past");
        $(".task").removeClass("present");
    }
}

$(".saveBtn").on("click", function() {
    localStorage.setItem($(this).attr("id"), $(this).siblings(".task").val())
})


//This function cycles through each time block and pulls its relative local storage data and displays it within the text area
function pullSavedTasks() {
   $(this).val(localStorage.getItem($(this).siblings(".btn").attr("id")));
}