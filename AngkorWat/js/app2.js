const hamburgarBtn = document.querySelector('.hamburgar');
const manuBar = document.querySelector(".responsive-nav");

hamburgarBtn.addEventListener('click',function(){
    manuBar.classList.toggle("active");
})