let timeRem = 10;
let timer;
let transpChange;

function startCountdown() {
    let timeOut = document.getElementById('timeOut');
    timeOut.innerHTML = timeRem;
    timer = setInterval(countdown, 1000);

    transpChange = 1/timeRem;
    console.log(transpChange);
}

function countdown() {
    if (timeRem >0) {
        timeRem--;
        let timeOut = document.getElementById('timeOut');
        timeOut.innerHTML = timeRem;  

        let front = document.getElementById('frontLevel');
        front.style.opacity = timeRem * transpChange;
        console.log(timeRem * transpChange);


    } else {
        clearInterval(timer);
        let timeOut = document.getElementById('timeOut');
        window.location = "page7.html";  
    }
  
}