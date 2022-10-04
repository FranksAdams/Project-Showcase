
   function hideFunction(){
       document.getElementById('hide').style.display='none';
   }

      function yesCheckFunction() {
         document.getElementById("showDOB").style.display ='block';
    }


 function yesFunction2() {
   var x = document.getElementById("fakeID2");
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
   }
}

function hideID(){
  document.getElementById("imageID").style.display = "none";
  document.getElementById("imageID1").style.display = "none";
}

function showID(){
  document.getElementById("show").style.display = "none";
  document.getElementById("imageID").style.display = "block";
  document.getElementById("imageID1").style.display = "block";
}

function yesFunction3() {
   var x = document.getElementById("fakeID");
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
   }
}

function noCheckFunction() {
   var x = document.getElementById("fakeID");
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
   }
}


   let point = 0;
 function addPointid(){
point += 10;
document.getElementById("pointText").innerHTML = "Score: " + point;
 }

 function subPointid(){
point -= 5;
document.getElementById("pointText").innerHTML = "Score: " + point;
 }



//JavaScript for timer in level.
let timeRem = 50;
let timer;
let transpChange;
function startCountdown() {
  let timeOut = document.getElementById('timeOut');
  timeOut.innerHTML = timeRem;
  timer = setInterval(countdown, 1000);
  transpChange = 1 / timeRem;
  console.log(transpChange);
}
function countdown() {
  if (timeRem > 0) {
    timeRem--;
timeRem;
    let timeOut = document.getElementById('timeOut');
    timeOut.innerHTML = timeRem;
  } else {
    clearInterval(timer);
    let timeOut = document.getElementById('timeOut');
    timeOut.innerHTML = 'END';
    nextLevelDecision1();
  }

  //To record time taken for level.
  var page2time = timeRem;
  sessionStorage.setItem('page2time', page2time);

   //Changes page to fail screen if timer runs out.
  function nextLevelDecision1() {
    if (timeOut.innerHTML = 'END') {
      document.getElementById("timeOut").innerHTML = "You ran out of time!";
      sendToNext();
      setTimeout(function () {
        window.location.replace("losingpage.html")
      }, 3000);
    }
  }
}


//To send points value to next page.
function sendToNext() {
  var pointVar = point;
  sessionStorage.setItem('pointVar', pointVar);

  setTimeout(function () {
    window.open('page3.html', '_self')
  }, 4000);

}

