$(document).ready(function(){

  // getStorageItems();

  // function getStorageItems(){
  //   if (localStorage)
  //   localStorage.getItem("time", time);
  //   localStorage.getItem("value", value);
  // }

  

  currentDay = moment().format('dddd, MMM Do YYYY');
  $('#currentDay').html(currentDay);

    var currentDay = document.getElementById("currentDay");
    currentDay.textContent = moment();

 
    $(".saveBtn").on("click", function(){

    var value = $(this).siblings(".list-content").val();
    var time = $(this).siblings(".hour").text();
    console.log(time + " " + value);
    localStorage.setItem(time, value);
    

    });

});