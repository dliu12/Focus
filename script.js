window.onload = function(){
  console.log("works");
  document.querySelector('head').insertAdjacentHTML(
    'beforeend',
    `<link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet">`
  );
  var con = confirm("Start FOCUS plugin?");
  if (con == true){
    console.log("FOCUS begin");
    var timeP = prompt("How long would you want to FOCUS for?","15");
    var timeD = parseFloat(timeP);
    var check = isNaN(timeD);
    console.log(check);
    var time;
    if  (check == true){
      console.log("NaN");
      time = 15;
      console.log(time);
    }
    else{
      time = timeD;
      console.log(time);
    }
    // conversion
    var second = 60;
    var minute = time-1;
    console.log(minute);
    // Display On
    document.querySelector('body').insertAdjacentHTML(
      "afterbegin",
      `<div id='block'/>`
    );
    var block = document.getElementById('block');
    block.insertAdjacentHTML(
      "beforeend",
      `<div id='clock'/>`
    );
    // remove function
    function remove(parentId,elementId){
      var parent = document.querySelector(parentId);
      var child = document.querySelector(elementId);
      parent.removeChild(child);
    }
    // Timer
    var currentM;
    var xminute = setInterval(function(){
      minute --;
      // currentM = minute;
      console.log(minute);
    },60*1000)

    var xsecond = setInterval(function(){
      second --;
      // currentS = second;
      if (second <= 0 && minute >= 0){
        second = 60;
        var currentM = minute+1;
        clock.innerHTML = "Oops!"+" <br /> You should stay focused for another " + currentM +":"+ "00" + " minutes:(";
      }
      else if (second < 10 && second >0){
        clock.innerHTML = "Oops!"+" <br /> You should stay focused for another " + minute +":0"+ second + " minutes:(";
      }
      else if (second < 1 && minute < 0){
        clock.innerHTML = "Oops!"+" <br /> You should stay focused for another 00:00 minute:)";
        clearInterval(xsecond);
        clearInterval(xminute);
        setTimeout(function(){
          remove('#block','#clock');
          remove('body','#block');
        },2000);
      }
      else{
        clock.innerHTML = "Oops!"+" <br /> You should stay focused for another " + minute +":"+ second + " minutes:)";
      }

      console.log(minute,second);
    },1000)
  }//closed on if confirmed = true

  else{
    console.log("FOCUS canceled.");
  }// closed on else confirmed = false;
};
