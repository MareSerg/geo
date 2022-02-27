//Определение формы девайса
const isMobile = {
  Android: function (){
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function(){
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function(){
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function(){
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function(){
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function(){
    return(
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};
if (isMobile.any()){
  document.body.classList.add('_touch');

let menuArrows = document.querySelectorAll('.menu__arrow');
if(menuArrows.length >0){
  for (let index = 0; index < menuArrows.length; index++) {
    const menuArrow = menuArrows[index];
    menuArrow.addEventListener("click" , function (e){
        menuArrow.parentElement.classList.toggle ('_active');

    });
  }
}

} else {
  document.body.classList.add ('_pc');
}


//Мемориальный комплекс, слайдер
"use strict"

const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()

    slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach(slide => {
    slide.classList.remove('active')
  })
}



//Бургер

const iconMenu =document.querySelector('.menu_icon');
if (iconMenu){
  const menuBody =document.querySelector('.menu_body');
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

//Изделия для авиации. низкоуровневые системы, слайдер

const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar =document.querySelector('.sidebar')
const container = document.querySelector('.products')
const mainSlide =document.querySelector ('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length


let activeSlideIndex = 0

sidebar.style.top=`-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click',() => {
    changeSlide('up')
} )
downBtn.addEventListener('click',()=>{
    changeSlide('down')
} )

function changeSlide(direction) {
    if(direction === 'up') {
         activeSlideIndex++
         if (activeSlideIndex === slidesCount)
         {
             activeSlideIndex = 0
         }
    } else if (direction ==='down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount-1
        }
    }
     const height = container.clientHeight

 mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

 sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
