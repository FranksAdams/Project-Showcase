//To receive points value from the previous page.
function loseReceive() {
    let pointVarBar = sessionStorage.getItem('pointVar');
    var name = sessionStorage.getItem('name');
    let age = sessionStorage.getItem('age');
    let drinks = sessionStorage.getItem('favDrink');
    let emails = sessionStorage.getItem('emails');
    let barInput = sessionStorage.getItem('barInput');

  

    //document.getElementById("drinks").innerHTML = "drink: " + drinks;


    document.getElementById("loseMessage").innerHTML = "Aw no, that is unlucky " + name + ", maybe you can try and apply again to get the job! <br>"
    + "While trying your trial shift at " + barInput + ", you managed to gain " + pointVarBar + " points. <br>" //"Which we just don't think is satisfactory."
    + "You're only " + age + " years old, we're sure you'll be able to get a job! If anything comes up we'll email you at " + emails + ".";
  }

function restart() {
  window.location.replace("page1.html");
}