

//function send(){

 //var name = document.getElementById('name').value;
 //var age = document.getElementById('age').value;
 //var drinks = document.getElementsByClassName('drinks').value;
//var bar = document.getElementsByClassName('bar').value

 
 //sessionStorage.setItem('age',age);
 //sessionStorage.setItem('drinks',drinks);
 //sessionStorage.setItem('bar',bar);

 //window.open('page1.html','_self');
//}

function ageFunction() {
  let x = document.getElementById("ageDetail").value;
  let text;
  if (isNaN(x) || x < 18) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("age1").innerHTML = text;
}

function validate() {
  var a = document.forms["introForm"]["name"].value;
  var b = document.forms["introForm"]["age"].value;
  //var c = document.forms["introForm"]["favDrink"].value;
  var d = document.forms["introForm"]["emails"].value;

  if (a == "") {
      alert("You must provide a name!");
      return false;
  }else if (b== ""){ 
    alert("You must provide an age!");
      return false;
    }else if (d== ""){ 
      alert("You must provide an email!");
        return false;
  } else {
      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      var drinks = document.getElementsByClassName('drinks').value;
      var emails = document.getElementById('emails').value;
      var barInput = document.getElementById('barInput').value;
      
      
      sessionStorage.setItem('name',name);
      sessionStorage.setItem('age',age);
      sessionStorage.setItem('drinks',drinks);
      sessionStorage.setItem('emails',emails);
      sessionStorage.setItem('barInput',barInput);
      window.open('page2.html','_self');
  }
  
}

function succesful(){
  alert("Your application has been succesful! Click the start shift button to begin!");
}

