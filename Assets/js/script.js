// ADDED DOCUMENT "READY." SO CODE WILL ONLY RUN ONCE THE PAGE (DOM) IS READY FOR JAVASCRIPT CODE TO EXECUTE
$(document).ready(function () {
// ADDED SAVEBTN CLICK LISTENER  
$(".saveBtn").on ("click", saveHandler);

function saveHandler () {
  var inputText= $(this).siblings(".description").val ();
  console.log("inputText= ", inputText);

  var time= $(this).parent().attr("id").split("-")[1];
  console.log("time= ", time);
// SAVED USER INPUT TO LOCAL STORAGE  
  localStorage.setItem(time,inputText);
}

function colorCoder () {
// ADDED DAY.JS TO GET CURRENT HOUR IN 24-HOUR TIME 
  var timeNow = dayjs().hour();
// ADDED CODE TO APPLY THE CLASSES TO EACH TIME BLOCK SO BACKGROUND COLORS CAN BE INDICATED
  $(".time-block").each (function() {
    var blockTime= parseInt($(this).attr("id").split("-")[1]);
    if (blockTime < timeNow){
      $(this).addClass ("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if(blockTime === timeNow) {
      $(this).removeClass ("past");
       $(this).removeClass("future");
      $(this).addClass ("present");
    } else{
      $(this).removeClass ("past");
      $(this).addClass ("future");
      $(this).removeClass ("present");
    }
});
}

colorCoder ();
// ADDED CODE TO GET USER INPUT THAT WAS SAVED IN LOCALSTORAGE AND SET VALUES OF TEXT ELEMENTS
  $('#hour-9 .description').val(localStorage.getItem('9'));
  $('#hour-10 .description').val(localStorage.getItem('10'));
  $('#hour-11 .description').val(localStorage.getItem('11'));
  $('#hour-12 .description').val(localStorage.getItem('12'));
  $('#hour-13 .description').val(localStorage.getItem('13'));
  $('#hour-14 .description').val(localStorage.getItem('14'));
  $('#hour-15.description').val(localStorage.getItem('15'));
  $('#hour-16 .description').val(localStorage.getItem('16'));
  $('#hour-17 .description').val(localStorage.getItem('17'));
  $('#hour-18.description').val(localStorage.getItem('18'));
  $('#hour-19 .description').val(localStorage.getItem('19'));
  $('#hour-20 .description').val(localStorage.getItem('20'));

// ADDED CODE TO DISPLAY CURRENT DATE IN THE HEADER  
  var todayCurrrentDate = dayjs().format("	dddd, MMMM D, YYYY h:mm A");
  $("#currentDay").text(todayCurrrentDate);
})

