$(document).ready(function(){

  //gets item from local storage

  $("#9 .list-content").val(localStorage.getItem("9"));
  $("#10 .list-content").val(localStorage.getItem("10"));
  $("#11 .list-content").val(localStorage.getItem("11"));
  $("#12 .list-content").val(localStorage.getItem("12"));
  $("#13 .list-content").val(localStorage.getItem("13"));
  $("#14 .list-content").val(localStorage.getItem("14"));
  $("#15 .list-content").val(localStorage.getItem("15"));
  $("#16 .list-content").val(localStorage.getItem("16"));
  $("#17 .list-content").val(localStorage.getItem("17"));

  // Gets current time and displays it at the top of the page

  currentDay = moment().format('dddd, Do MMMM YYYY');
  $('#currentDay').html(currentDay);


// Function to listen for click and save the text to local storage
 
    $(".saveBtn").on("click", function(){

    var value = $(this).siblings(".list-content").val();
    var time = $(this).parent().attr("id");
    console.log(time + " " + value);
    localStorage.setItem(time, value);
    
    });

    // Functions to listen for click on delete button and clear local storage and text box

    $("#del9").on("click", function(){
      
      $(this).siblings(".list-content").val("");
      localStorage.removeItem(9);
    
    })

    $("#del10").on("click", function(){
      
      $(this).siblings(".list-content").val("")
      localStorage.removeItem(10)
    
    })

    $("#del11").on("click", function(){
      
      $(this).siblings(".list-content").val("")
      localStorage.removeItem(11)
    
    })

    $("#del12").on("click", function(){
      
      $(this).siblings(".list-content").val("")
      localStorage.removeItem(12)
    
    })

    $("#del13").on("click", function(){
      
      $(this).siblings(".list-content").val("")
      localStorage.removeItem(13)
    
    })

    $("#del14").on("click", function(){
      
      $(this).siblings(".list-content").val("")
      localStorage.removeItem(14)
    
    })

    $("#del15").on("click", function(){
      
      $(this).siblings(".list-content").val("")
      localStorage.removeItem(15)
    
    })

    $("#del16").on("click", function(){
      
      $(this).siblings(".list-content").val("")
      localStorage.removeItem(16)
    
    })

    $("#del17").on("click", function(){
      
      $(this).siblings(".list-content").val("")
      localStorage.removeItem(17)
    
    })



    // function to track current time and change colour of time blocks 

    function currentTime (){

      
      
      
      // Loop through hours
      
      
      $(".row").each(function () {
        var value = $("input");
        var currentTime = moment().hour();
        var timeBlock = $(this).attr("id");
        console.log(timeBlock, currentTime);

      if (timeBlock < currentTime) {
        $(this).children("input").removeClass("future");
        $(this).children("input").removeClass("present");
        $(this).children("input").addClass("past");
    }
      else if (timeBlock == currentTime) {
        $(this).children("input").removeClass("past");
        $(this).children("input").removeClass("future");
        $(this).children("input").addClass("present");
    }

    else {
        $(this).children("input").removeClass("present");
        $(this).children("input").removeClass("past");
        $(this).children("input").addClass("future");
    }
    

    }

  )}

  currentTime();

})

