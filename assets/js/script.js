// Need to build a Dialy Planner Application
// Show the current day at top of the page
// Creat timeblocks for standerd business hours
//      1. From 9 am to 5 pm
// Color code the timeblock to show past, present and future time
// Make each timeblock to take an input
// Save the input of each timeblock in localstorage


  // Get the today's date and time
  function displayDateTime(){
     var today = moment().format("dddd, MMMM Do YYYY [at] hh:mm:ss a");
     $("#currentDay").text(today);
  }
  
  // Save the user input
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
  
  // clear the user input
  $(".clearBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.removeItem(time, text);

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
  });
  

  function colorCode() {
    var currentHour = moment().hour();

    var timeBlock = $(".time-block")
    timeBlock.each(function () {
      var blockHour = parseInt($(this).attr("id"));
      if (currentHour > blockHour) {
        // $(this) refer to the timeBlock with condition currentHour > blockHour
        $(this).children(".description").addClass("past");
        
      } else if (currentHour === blockHour) {
        // $(this) refer to the timeBlock with condition currentHour === blockHour
        $(this).children(".description").removeClass("past");
        $(this).children(".description").addClass("present");
      } else {
        // $(this) refer to future timeBlock
        $(this).children(".description").removeClass("past");
        $(this).children(".description").removeClass("present");
        $(this).children(".description").addClass("future");
      }
    });
  }

  colorCode();
  setInterval(displayDateTime, 1000)


