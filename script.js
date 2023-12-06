let flag =0
slideShow(flag)
function slideShow(num){
let slides = document.getElementsByClassName("slider")

for(let y of slides){
   y.style.display="none"
}
if(num == slides.length){
   flag=0;
   num=0;
}
if(num<0){
   flag = slides.length-1;
   num=slides.length-1;
}
slides[num].style.display="block"
}
function controll(n){
flag = flag + n
slideShow(flag)
} 

function togglePopup() {
   const overlay = document.getElementById('overlay');
   overlay.style.display="flex"
}

document.getElementById("popForm").addEventListener("submit", function() {
   
  
   togglePopup();
});
let close=document.querySelector(".close")
close.addEventListener("click" ,()=>{
   overlay.style.display="none"
})

let col1 = document.querySelector("#col1")

col1.addEventListener("mouseenter",()=>{
   col1.style.alignItems="center"
})
col1.addEventListener("mouseleave",()=>{
   col1.style.alignItems="end"
})


let col2 = document.querySelector("#col2")

col2.addEventListener("mouseenter",()=>{
   col2.style.alignItems="center"
})
col2.addEventListener("mouseleave",()=>{
   col2.style.alignItems="end"
})


let col3 = document.querySelector("#col3")

col3.addEventListener("mouseenter",()=>{
   col3.style.alignItems="center"
})
col3.addEventListener("mouseleave",()=>{
   col3.style.alignItems="end"
})


let col4 = document.querySelector("#col4")

col4.addEventListener("mouseenter",()=>{
   col4.style.alignItems="center"
})
col4.addEventListener("mouseleave",()=>{
   col4.style.alignItems="end"
})



let col5 = document.querySelector("#col5")

col5.addEventListener("mouseenter",()=>{
   col5.style.alignItems="center"
})
col5.addEventListener("mouseleave",()=>{
   col5.style.alignItems="end"
})

let details1 = document.querySelector(".details1")
let details2 = document.querySelector(".details2")
let details3 = document.querySelector(".details3")
let details4 = document.querySelector(".details4")
let details5 = document.querySelector(".details5")
let details6 = document.querySelector(".details6")
let details7 = document.querySelector(".details7")
let details8 = document.querySelector(".details8")

details1.addEventListener("mouseenter",()=>{
   details1.style.display="none"
   details2.style.display="flex"

})
details2.addEventListener("mouseleave",()=>{
   details1.style.display="flex"
   details2.style.display="none"
})

details3.addEventListener("mouseenter",()=>{
   details3.style.display="none"
   details4.style.display="flex"

})
details4.addEventListener("mouseleave",()=>{
   details3.style.display="flex"
   details4.style.display="none"
})


details5.addEventListener("mouseenter",()=>{
   details5.style.display="none"
   details6.style.display="flex"

})
details6.addEventListener("mouseleave",()=>{
   details5.style.display="flex"
   details6.style.display="none"
})

details7.addEventListener("mouseenter",()=>{
   details7.style.display="none"
   details8.style.display="flex"

})
details8.addEventListener("mouseleave",()=>{
   details7.style.display="flex"
   details8.style.display="none"
})

