setInterval(() => {
    d = new Date();
    htime = d.getHours();
    
    mtime = d.getMinutes();
    
    stime = d.getSeconds();
    // console.log(time);
    // console.log("htime"+htime);
    var hrs=htime;
    if(htime>12){
    hrs=htime-12;
    }

    // console.log("hrs"+hrs);
    if(htime<=12){
      document.querySelector(".ampm").textContent="AM";
    }
    else{
      document.querySelector(".ampm").textContent="PM";

    }
if(hrs<0){
  const newTime=hrs*-1;
  document.querySelector(".hours").textContent=newTime;
}
else if(hrs==0){
  
  document.querySelector(".hours").textContent=12;
}
else{

  document.querySelector(".hours").textContent=hrs;
}
  document.querySelector(".minutes").textContent=mtime;
  document.querySelector(".secs").textContent=stime;
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
  
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
  }, 1000);
