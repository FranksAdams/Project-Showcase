//To receive session storage from intro page, and points from previous pages.
function winReceive() {
  let pointVarBar = sessionStorage.getItem('pointVar');
  var name = sessionStorage.getItem('name');
  let age = sessionStorage.getItem('age');
  let drinks = sessionStorage.getItem('favDrink');
  let emails = sessionStorage.getItem('emails');
  let barInput = sessionStorage.getItem('barInput');


  //Calculates time spent on each level
  var pge2Time = 50 - sessionStorage.getItem('page2time');
  var pge3Time = 70 - sessionStorage.getItem('page3time');
  var pge4Time = 20 - sessionStorage.getItem('page4time');

  //alert(drinks);

  //document.getElementById("drinks").innerHTML = "drink: " + drinks;


  document.getElementById("winMessage").innerHTML = "That was a great trial shift, " + name + "!" + " We'd like you to start as soon as possible! <br>"
    + "While trying your trial shift at " + barInput + ", you managed to gain " + pointVarBar + " points. <br>" //"Which we think is satisfactory."
    + "That was great for a " + age + " year old, We'll send you out details of your start date, and any other information to " + emails + "."

  document.getElementById("timeStats").innerHTML = "Time taken for Level 1: " + pge2Time + " seconds. <br>"
    + "Time taken for Level 2: " + pge3Time + " seconds. <br>"
    + "Time taken for Level 3: " + " Automatic Countdown. <br>"
    + "Time taken for Level 4: " +  " Automatic Countdown. <br>";
}

function restart() {
  window.location.replace("page1.html");
}