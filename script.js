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
   overlay.style.display = overlay.style.display === 'none' ? 'flex' : 'none';
}

document.getElementById("popForm").addEventListener("submit", function (event) {
   event.preventDefault();
   // Add your form submission logic here

   // After submission, close the pop-up
   togglePopup();
});
let close=document.querySelector(".close")
close.addEventListener("click" ,()=>{
   overlay.style.display="none"
})
