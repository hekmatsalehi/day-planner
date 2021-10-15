// Need to build a Dialy Planner Application
// Show the current day at top of the page
// Creat timeblocks for standerd business hours
//      1. From 9 am to 5 pm
// Color code the timeblock to show past, present and future time
// Make each timeblock to take an input
// Save the input of each timeblock in localstorage

// Get the today's date
var today = moment().format("dddd, MMMM Do YYYY")
$("#currentDay").text(today);








 var userInputEl = $("textarea")

function saveUserInput(){
    localStorage.setItem("userEvent", userInputEl)
}



var saveButton = $(".saveBtn")
saveButton.on("click", saveUserInput)
  