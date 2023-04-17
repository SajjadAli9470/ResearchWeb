const wd=document.getElementById('wdev');
const wp=document.getElementById('wpress');
const gd=document.getElementById('gd');
const wdev=document.querySelector(".web");
const wpress=document.querySelector(".wpress");
const graphics=document.querySelector(".graphics");
wd.classList.add("active");
const mediaquery=window.matchMedia('(max-width:550px)');

wd.addEventListener("click",function(){
    wd.classList.add("active");
    wp.classList.remove("active");
    gd.classList.remove("active");
    if(mediaquery.matches){
        wdev.style.display="flow-root";
    }
    else{
    wdev.style.display="flex";}
    wpress.style.display="none";
    graphics.style.display="none";
});
wp.addEventListener("click",function(){
    wp.classList.add("active");
    gd.classList.remove("active");
    wd.classList.remove("active");

    wdev.style.display="none";
    if(mediaquery.matches){
        wpress.style.display="flow-root";
    }
    else{
    wpress.style.display="flex";}
    graphics.style.display="none";
});
gd.addEventListener("click",function(){
    wp.classList.remove("active");
    gd.classList.add("active");
    wd.classList.remove("active");

    wdev.style.display="none";
    wpress.style.display="none";
    if(mediaquery.matches){
        graphics.style.display="flow-root";
    }
    else{
    graphics.style.display="flex";}
});

function gotoTawlk(){
    location.href="javascript:void(Tawk_API.toggle())";
}



