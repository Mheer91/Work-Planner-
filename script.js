var currentDay= document.getElementById("currentDay");
var currentTime = moment().format("dddd, MMMM d YYYY hh:mm:ss");
var timeDifference = moment(currentTime).diff();



console.log(currentTime);
console.log(currentDay);

currentDay.innerHTML = currentTime;

