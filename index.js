let index=0;
function Slider(){
let slides=document.getElementsByClassName('slider-content');
for(let i=0;i<slides.length;++i){
    slides[i].style.display='none';
}
if(index>=slides.length){
    index=0;
}
slides[index++].style.display='flex';
setTimeout(Slider,4000)
}

function nextSlide(){
    let slides=document.getElementsByClassName('slider-content');
    for(let i=0;i<slides.length;++i){
        slides[i].style.display='none';
    }
    if(index>=slides.length){
        index=0;
    }
    slides[index++].style.display='flex';
    setTimeout(()=>{},4000);
}
function prevSlide(){
    let slides=document.getElementsByClassName('slider-content');
    for(let i=0;i<slides.length;++i){
        slides[i].style.display='none';
    }
    if(index<0){
        index=slides.length-1;
    }
    slides[index--].style.display='flex';
    setTimeout(()=>{},4000);
}
Slider();
function loginlink(){
    document.getElementById('login').style.display='block';
}
function back(x){
    x.parentElement.parentElement.style.display='none';
}
function signuplink(){
    document.getElementById('signup').style.display='block';
}