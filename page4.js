function PlayMusic() {
    play()
}

function play() {
    var audio2 = document.getElementById("audio2");
    audio2.play();
    audio1.loop = true;
}

function playBin() {
    var audio3 = document.getElementById("bin-noise");
    audio3.play();
  }

let timeRem = 20;
let timer;
let transpChange;

//JavaScript for timer in level.
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
        let timeOut = document.getElementById('timeOut');
        timeOut.innerHTML = timeRem;
        let front = document.getElementById('frontLevel');
        front.style.opacity = timeRem * transpChange;
        console.log(timeRem * transpChange);
    } else {
        clearInterval(timer);
        let timeOut = document.getElementById('timeOut');
        timeOut.innerHTML = 'END';
        nextLevelDecision();
    }
}
//To record time taken for level.
var page4time = timeRem;
sessionStorage.setItem('page4time', page4time);

//Increments points value.
let point = parseInt(sessionStorage.getItem('pointVar'));
function addPoint() {
    point += 1;
    document.getElementById("points1").innerHTML = "Points: " + point;
}
//To send points value to next page.
function sendToNext() {
    var pointVar = point;
    sessionStorage.setItem('pointVar', pointVar);
}

//this will need to be changed to incorporate the actual amount of points able to be gained up to this point, and points will be e.g if point > 10
function nextLevelDecision() {
    if (timeOut.innerHTML = 'END' && point > 27) {
        document.getElementById("timeOut").innerHTML = "You ran out of time!";
        document.getElementById("text").innerHTML = "Great! I managed to clean this place up in time! \n Pieces of rubish picked up: " + point;
        sendToNext()
        setTimeout(function () {
            window.location.replace("page5.html")
        }, 3000);
    } else {
        document.getElementById("timeOut").innerHTML = "You ran out of time!";
        document.getElementById("text").innerHTML = "Oh NO! I'm going to get fired! \n Pieces of rubish picked up: " + point;
        sendToNext()
        setTimeout(function () {
            window.location.replace("page5.html") // placehoder to test time storage
        }, 3000);
    }
}

//To receive points from previous page.
function receive() {
    let pointVarBar = sessionStorage.getItem('pointVar');
    //alert(pointVarBar);
    document.getElementById("points1").innerHTML = "Points: " + pointVarBar;
}
