var Goto=false;
const gopp=document.querySelector('.gotPosition');
const pbar=document.querySelector('.portfolio_menu'); 
    pbar.addEventListener("click",function(){
      PortMenu(pbar);
    });
    pbar.addEventListener("mouseenter",function(){
      PortMenu(pbar);
    });
    const pb=document.querySelector('.pb_1');

function PortMenu(x){

      gopp.style.display="block";
      gopp.classList.add("fadeInLeft");
      gopp.classList.add("animate");
      Goto=true;
}
document.addEventListener("click",function(e){
  
    if(e.target!=pbar){
      pbar.classList.remove("change");
      gopp.style.display="none";
      IDOpen=false;
    }
});
const all=[...document.querySelector(".all_project_option").children];

const alllpro=document.querySelector('.all_projects');

function letDo(classNameP,confirm){
  const reqClass=alllpro.children;
  if(confirm===false){
    for(let j=0;j<reqClass.length;j++){
      if(reqClass[j].classList[1]===classNameP){
        reqClass[j].style.display="flex";
      }
      else{
        reqClass[j].style.display="none";
      }
      
    }
  }else{
    for(let j=0;j<reqClass.length;j++){
      reqClass[j].style.display="flex";
  }
}
}activeButtons(0);
function activeButtons(x){
  for(let i=0;i<all.length;i++){
    if(i===x){
      all[i].style.backgroundColor="#39423485";

    }else{
      all[i].style.backgroundColor="#363c42";
      
    }
  }
  
}
function allpro(x,y,z){
  letDo(x,y);
  activeButtons(z);
}
