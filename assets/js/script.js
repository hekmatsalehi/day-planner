// Need to build a Dialy Planner Application
// Show the current day at top of the page
// Creat timeblocks for standerd business hours
//      1. From 9 am to 5 pm
// Color code the timeblock to show past, present and future time
// Make each timeblock to take an input
// Save the input of each timeblock in localstorage

// Get the today's date

$(document).ready(function () {
  var today = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").text(today);

  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
  });

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  function colorCode() {
    var currentHour = moment().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id"));

      if (currentHour > blockHour) {
        $(this).children(".description").addClass("past");
      } else if (currentHour === blockHour) {
        $(this).children(".description").removeClass("past");
        $(this).children(".description").addClass("present");
      } else {
        $(this).children(".description").removeClass("past");
        $(this).children(".description").removeClass("present");
        $(this).children(".description").addClass("future");
      }
    });
  }

  colorCode();
});

