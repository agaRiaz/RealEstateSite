burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");



burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});


//contact us section
function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("text").value;
      
      
    
    if(name.length <=0){
      alert("Please Enter valid Name");
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      alert("Please Enter valid Phone Number");
      return false;
    }
    if(email.indexOf("@")<1 ||email.lastIndexOf(".") < email.indexOf("@")+2 ||email.lastIndexOf(".")>= email.length){
      alert("Please Enter valid Email");
      return false;
    }
    if(message.length <=0){
      alert("Please Enter a Message");
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }