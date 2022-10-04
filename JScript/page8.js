
//To receive points value from the previous page.
function receive() {
  let pointVarBar = sessionStorage.getItem('pointVar');
  //alert(pointVarBar);
  document.getElementById("points1").innerHTML = "Points: " + pointVarBar;
}

//JavaScript for timer in level.
let timeRem = 10;
let timer;
let transpChange;
function startCountdown() {
  receive();
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
}  

  //To record time taken for level.
  //var page3time = timeRem;
  //sessionStorage.setItem('page3time', page3time);


  //Changes page to fail screen if timer runs out.
 //this will need to be changed to incorporate the actual amount of points able to be gained up to this point, and points will be e.g if point > 10
 function nextLevelDecision1() {
  if (timeOut.innerHTML = 'END' && point > 70) {
      document.getElementById("timeOut").innerHTML = "You ran out of time!";
      sendToNext();
      setTimeout(function () {
          window.location.replace("winningPage.html")
      }, 3000);
  } else {
      document.getElementById("timeOut").innerHTML = "You ran out of time!";
      sendToNext();
      setTimeout(function () {
          window.location.replace("losingpage.html") 
      }, 3000);
  }
 }




//Increments points value.
let point = parseInt(sessionStorage.getItem('pointVar'));
function addPointBar() {
  point += 5;
  document.getElementById("points1").innerHTML = "Points: " + point;
}
//Decrements points value.
function subPointBar() {
  point -= 3;
  document.getElementById("points1").innerHTML = "Points: " + point;
}

//To send points value to next page.
function sendToNext() {
  var pointVar = point;
  sessionStorage.setItem('pointVar', pointVar);
}


