function display(){
  document.querySelector(".sidenavb").style.display="flex";
  }
  
  function close(){
      document.querySelector(".sidenavb").style.display="none";
  }
  
const lft1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }
      // else{
      //   entry.target.classList.remove('show');
      // }
    });
  });
  
  const lft = document.querySelectorAll('.left');
  lft.forEach((el)=> lft1.observe(el));
  
  
  
  const elias = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('seeme');
      }
      // else{
      //   entry.target.classList.remove('seeme');
      // }
    });
  });
  
  
  const contactme = document.querySelectorAll('.right');
  contactme.forEach((el)=> elias.observe(el));
  
  const btm = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('seeme');
      }
      // else{
      //   entry.target.classList.remove('seeme');
      // }
    });
  });
  
  
  const bm = document.querySelectorAll('.botom');
  bm.forEach((el)=> btm.observe(el));
  
  
  const za = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('zaq11');
      }
      // else{
      //   entry.target.classList.remove('zaq11');
      // }
    });
  });
  
  
  const zaa = document.querySelectorAll('.zaq1');
  zaa.forEach((el)=> za.observe(el));
  

function food1(){
    document.querySelector(".div1").style.display="inline-block";
    document.querySelector(".div2").style.display="none";
    document.querySelector(".div3").style.display="none";
    document.querySelector(".div4").style.display="none";
    document.querySelector(".div5").style.display="none";
    document.querySelector(".div6").style.display="none";
    document.querySelector(".div7").style.display="none";
    document.querySelector(".div8").style.display="none";
    document.querySelector(".div9").style.display="none";
    document.querySelector(".div10").style.display="none";
}
function food2(){
    document.querySelector(".div2").style.display="inline-block";
    document.querySelector(".div1").style.display="none";
    document.querySelector(".div3").style.display="none";
    document.querySelector(".div4").style.display="none";
    document.querySelector(".div5").style.display="none";
    document.querySelector(".div6").style.display="none";
    document.querySelector(".div7").style.display="none";
    document.querySelector(".div8").style.display="none";
    document.querySelector(".div9").style.display="none";
    document.querySelector(".div10").style.display="none";
}
function food3(){
  document.querySelector(".div3").style.display="inline-block";
  document.querySelector(".div2").style.display="none";
  document.querySelector(".div1").style.display="none";
  document.querySelector(".div4").style.display="none";
  document.querySelector(".div5").style.display="none";
  document.querySelector(".div6").style.display="none";
  document.querySelector(".div7").style.display="none";
  document.querySelector(".div8").style.display="none";
  document.querySelector(".div9").style.display="none";
  document.querySelector(".div10").style.display="none";
}
function food4(){
  document.querySelector(".div4").style.display="inline-block";
  document.querySelector(".div2").style.display="none";
  document.querySelector(".div3").style.display="none";
  document.querySelector(".div1").style.display="none";
  document.querySelector(".div5").style.display="none";
  document.querySelector(".div6").style.display="none";
  document.querySelector(".div7").style.display="none";
  document.querySelector(".div8").style.display="none";
  document.querySelector(".div9").style.display="none";
  document.querySelector(".div10").style.display="none";
}
function food5(){
  document.querySelector(".div5").style.display="inline-block";
  document.querySelector(".div2").style.display="none";
  document.querySelector(".div3").style.display="none";
  document.querySelector(".div4").style.display="none";
  document.querySelector(".div1").style.display="none";
  document.querySelector(".div6").style.display="none";
  document.querySelector(".div7").style.display="none";
  document.querySelector(".div8").style.display="none";
  document.querySelector(".div9").style.display="none";
  document.querySelector(".div10").style.display="none";
}
function food6(){
  document.querySelector(".div6").style.display="inline-block";
  document.querySelector(".div2").style.display="none";
  document.querySelector(".div3").style.display="none";
  document.querySelector(".div4").style.display="none";
  document.querySelector(".div5").style.display="none";
  document.querySelector(".div1").style.display="none";
  document.querySelector(".div7").style.display="none";
  document.querySelector(".div8").style.display="none";
  document.querySelector(".div9").style.display="none";
  document.querySelector(".div10").style.display="none";
}
function food7(){
  document.querySelector(".div7").style.display="inline-block";
  document.querySelector(".div2").style.display="none";
  document.querySelector(".div3").style.display="none";
  document.querySelector(".div4").style.display="none";
  document.querySelector(".div5").style.display="none";
  document.querySelector(".div6").style.display="none";
  document.querySelector(".div1").style.display="none";
  document.querySelector(".div8").style.display="none";
  document.querySelector(".div9").style.display="none";
  document.querySelector(".div10").style.display="none";
}
function food8(){
  document.querySelector(".div8").style.display="inline-block";
  document.querySelector(".div2").style.display="none";
  document.querySelector(".div3").style.display="none";
  document.querySelector(".div4").style.display="none";
  document.querySelector(".div5").style.display="none";
  document.querySelector(".div6").style.display="none";
  document.querySelector(".div7").style.display="none";
  document.querySelector(".div1").style.display="none";
  document.querySelector(".div9").style.display="none";
  document.querySelector(".div10").style.display="none";
}
function food9(){
  document.querySelector(".div9").style.display="inline-block";
  document.querySelector(".div2").style.display="none";
  document.querySelector(".div3").style.display="none";
  document.querySelector(".div4").style.display="none";
  document.querySelector(".div5").style.display="none";
  document.querySelector(".div6").style.display="none";
  document.querySelector(".div7").style.display="none";
  document.querySelector(".div8").style.display="none";
  document.querySelector(".div1").style.display="none";
  document.querySelector(".div10").style.display="none";
}
function food10(){
  document.querySelector(".div10").style.display="inline-block";
  document.querySelector(".div2").style.display="none";
  document.querySelector(".div3").style.display="none";
  document.querySelector(".div4").style.display="none";
  document.querySelector(".div5").style.display="none";
  document.querySelector(".div6").style.display="none";
  document.querySelector(".div7").style.display="none";
  document.querySelector(".div8").style.display="none";
  document.querySelector(".div9").style.display="none";
  document.querySelector(".div1").style.display="none";
}