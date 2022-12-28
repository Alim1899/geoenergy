'use strict';

//Adding menu toolbar to navbar
const toggleBtn = document.querySelector('.toggle');
const list = document.querySelector('.list');

toggleBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(list.classList.contains('toggler'))  list.classList.remove('toggler');
    else list.classList.add('toggler');
})


// ///////////////////////////////////////////////////////////////////
//Slidebar


const slider = function(){
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
   const dotContainer = document.querySelector('.dots');
   
    let curSlide = 0;
    let maxSlide = slides.length-1;

   
   ////Functions
   const createDots = function(){
     slides.forEach(function(s, i) {
     dotContainer.insertAdjacentHTML('beforeend', `
     <button class="dots__dot" data-slide="${i}"></button>`
     );
   });
   };
   createDots();

   const activeDot = function(slide){
     document
     .querySelectorAll('.dots__dot')
     .forEach(dot => 
       dot.classList.remove
       ('dots__dot--active'))

       document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
   }
   activeDot(0);


    slides.forEach((s, i) => s.style.transform = `translateX(${100*i}%)`)
    
    const goToSlide = function (slide) {

    
     slides.forEach((s, i) => s.style.transform = `translateX(${100*(i-slide)}%)`)
   }


    //Next Slide

   function nextSlide() {
     if(curSlide===maxSlide){
       curSlide=0;
     }else{
       curSlide++;
     }
     goToSlide(curSlide);
     activeDot(curSlide);
   }

   

    //Previous Slide
    function prevSlide() {
     if(curSlide===0){
       curSlide=slides.length-1;
     }else{
       curSlide--;
     }
     goToSlide(curSlide);
     activeDot(curSlide);
    }

   const init = function(){
   goToSlide(0);
   
   activeDot(0);
   }
   init();

    btnLeft.addEventListener('click',prevSlide)
     btnRight.addEventListener('click',nextSlide)

    //Add event listeners to keyboard key's

    document.addEventListener('keydown', function(e){
     if(e.key ==='ArrowLeft') prevSlide();
     e.key === 'ArrowRight' && nextSlide();
    })
   

    dotContainer.addEventListener('click', function(e){

     if(e.target.classList.contains('dots__dot')){
       const { slide } = e.target.dataset;
     
     goToSlide(slide);
     activeDot(slide);
     }
   }
    )
 };
 slider();