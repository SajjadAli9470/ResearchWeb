const nav=document.querySelector(".nav");
var MenuOpen=false;
function MenuIcon(x) {
    if (MenuOpen == false) {
        x.classList.toggle("change");
        nav.classList.add("fadeInLeft");
        nav.classList.add("animate");
        nav.style.display="block";
        MenuOpen = true;
        
    } else {
        x.classList.toggle("change");
        nav.classList.remove("fadeInDown");
        nav.classList.remove("animate");
        nav.style.display="none";
        MenuOpen = false;
    }
  }

// date selector
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("plandate").setAttribute("min", today);


const newplan=document.getElementById("addnewpost");
const newcancel=document.getElementById("plancancel");
const planform=document.querySelector(".planform");
newplan.addEventListener("click",()=>{
    planform.style.display="block";
});
newcancel.addEventListener("click",()=>{
    planform.style.display="none";
});
