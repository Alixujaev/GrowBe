let perfectImg = document.querySelector('.perfect__solution_img');
let perfect = document.querySelector('.perfect__solution');

perfect.addEventListener('mousemove', (e) => {


  const dataSpeed = perfectImg.getAttribute('data-speed');

  const x = (window.innerWidth - e.pageX * dataSpeed) / 100;
  const y = (window.innerHeight - e.pageY * dataSpeed) / 100;

  perfectImg.style.transform = `translate(${x}px, ${y}px)`;
})


let featuresLink = document.querySelector('.header__link-f');
let headerNavIcon = document.querySelector('.heade__nav-icon');
let headerNavDown = document.querySelector('.header__nav_features-down');
let headerNav = document.querySelector('.header__nav');

featuresLink.addEventListener('click', function () {
    if(headerNavDown.classList.contains('header__nav_features-down_1')){
        headerNavDown.style = `transform: scaleY(1)`;
        headerNavIcon.style = `transform: rotate(180deg)`;
        headerNavDown.classList.add('active1');
        headerNavDown.classList.remove('header__nav_features-down_1');
    }else if(headerNavDown.classList.contains('active1')){
        headerNavDown.style = `transform: scaleY(0)`;
        headerNavIcon.style = `transform: rotate(0)`;
        headerNavDown.classList.remove('active1');
        headerNavDown.classList.add('header__nav_features-down_1');
    }
    
})

let videoPlay = document.querySelector('.header__content_video')
let view = document.querySelector('.view');
let iks = document.querySelector('.close');
let vieImg = document.querySelector('.view > img');
let img = document.querySelector('.main__product-img');


  videoPlay.addEventListener('click', function(){
    view.classList.add('active')
  })
  iks.addEventListener('click', () => {
    view.classList.remove('active');
  })

let headerBurger = document.querySelector('.header__burger_all');
let headerBurgerNav = document.querySelector('.header__burger');
let headerContentDesc = document.querySelector('.header__content_desc');
let headerContentIcon1 = document.querySelector('.h__b_1');
let headerContentIcon2 = document.querySelector('.h__b_2');
let headerContentIcon3 = document.querySelector('.h__b_3');


headerBurger.addEventListener('click', function () {
  if(headerBurger.classList.contains('h__b_full')){
    headerBurger.classList.add('active7');
    headerBurgerNav.style = `top: 0`;
    headerBurger.style = `z-index: 99`;
    headerContentIcon1.style = `display: none`;
    headerContentIcon2.style = `transform: rotate(45deg)`;
    headerContentIcon3.style = `transform: rotate(-45deg)`;
    headerContentDesc.style = `z-index: -99`;
    headerBurger.classList.remove('h__b_full');
  }else if(headerBurger.classList.contains('active7')){
    headerBurgerNav.style = `top: -100%`;
    headerContentIcon1.style = `display: inline`;
    headerContentIcon2.style = `transform: rotate(1)`;
    headerContentIcon3.style = `transform: rotate(1)`;
    headerContentDesc.style = `z-index: 99`;
    headerBurger.classList.add('h__b_full');
    headerBurger.classList.remove('active7');
  }
})
let slideDesc1 = document.querySelector('.slide__card_desc1');
let slideDesc2 = document.querySelector('.slide__card_desc2');
let slideDesc3 = document.querySelector('.slide__card_desc3');
let slideDesc4 = document.querySelector('.slide__card_desc4');

class Slider{
  constructor(config){
      const slideMain = this.sliderMain = document.querySelector(config.sliderMain);
      const sliderClicks = this.sliderClick = document.querySelectorAll(config.sliderClick);
      const sliderCard1 = this.sliderCard1 = document.querySelector(config.sliderCard1);
      const sliderCard2 = this.sliderCard2 = document.querySelector(config.sliderCard2);
      const sliderCard3 = this.sliderCard3 = document.querySelector(config.sliderCard3);
      const sliderCard4 = this.sliderCard4 = document.querySelector(config.sliderCard4);
      const sC1 = this.sliderClick1 = document.querySelector(config.sliderClick1);
      const sC2 = this.sliderClick2 = document.querySelector(config.sliderClick2);
      const sC3 = this.sliderClick3 = document.querySelector(config.sliderClick3);
      const sC4 = this.sliderClick4 = document.querySelector(config.sliderClick4);
          for (let c = 0; c < sliderClicks.length; c++) {
            sliderClicks[c].addEventListener('click', function () {
              for (let k = 0; k < sliderClicks.length; k++) {
                sliderClicks[c].classList.remove('active2');
                sliderClicks[k].classList.remove('active2');
              }
              sliderClicks[c].classList.add('active2');
              if(sC2.classList.contains('active2')){
                slideMain.style.transform = `translateX(-51%)`;
                sliderCard1.classList.remove('slider__shadow');
                sliderCard3.classList.remove('slider__shadow');
                sliderCard4.classList.remove('slider__shadow');
                slideDesc2.style = `opacity: 1`;
                slideDesc3.style = `opacity: 1`;
                slideDesc1.style = `opacity: 0.3`;
                slideDesc4.style = `opacity: 0.3`;
                sliderCard2.classList.add('slider__shadow');
              }else if(sC3.classList.contains('active2')){
                slideMain.style.transform = `translateX(-102%)`;
                sliderCard2.classList.remove('slider__shadow');
                sliderCard2.classList.remove('slider__shadow');
                sliderCard4.classList.remove('slider__shadow');
                sliderCard3.classList.add('slider__shadow');
                slideDesc4.style = `opacity: 1`;
                slideDesc3.style = `opacity: 1`;
                slideDesc1.style = `opacity: 0.3`;
                slideDesc2.style = `opacity: 0.3`;
              }else if(sC4.classList.contains('active2')){
                slideMain.style.transform = `translateX(-151%)`;
                sliderCard1.classList.remove('slider__shadow');
                sliderCard2.classList.remove('slider__shadow');
                sliderCard3.classList.remove('slider__shadow');
                sliderCard4.classList.add('slider__shadow');
                slideDesc4.style = `opacity: 1`;
                slideDesc3.style = `opacity: 1`;
                slideDesc1.style = `opacity: 0.3`;
                slideDesc2.style = `opacity: 0.3`;
              }else if(sC1.classList.contains('active2')){
                slideMain.style.transform = `translateX(0)`;
                sliderCard4.classList.remove('slider__shadow');
                sliderCard3.classList.remove('slider__shadow');
                sliderCard2.classList.remove('slider__shadow');
                sliderCard1.classList.add('slider__shadow');
                slideDesc3.style = `opacity: 0.3`;
                slideDesc4.style = `opacity: 0.3`;
                slideDesc1.style = `opacity: 1`;
                slideDesc2.style = `opacity: 1`;
              }
              
            })
          }
          
        }
        
      }

const slider = new Slider({
  sliderMain: `.slide__main`,
  sliderCard: `.slide__main_card`,
  sliderClick: `.slayd__click`,
  sliderClick1: `.slayd__click_1`,
  sliderClick2: `.slayd__click_2`,
  sliderClick3: `.slayd__click_3`,
  sliderClick4: `.slayd__click_4`,
  sliderCard1: '.slide__main_card1',
  sliderCard2: '.slide__main_card2',
  sliderCard3: '.slide__main_car3',
  sliderCard4: '.slide__main_card4',
})

class Slider2{
  constructor(config){
      const NslideMain = this.NsliderMain = document.querySelector(config.NsliderMain);
      const NsliderClicks = this.NsliderClick = document.querySelectorAll(config.NsliderClick);
      const NsliderCard1 = this.NsliderCard1 = document.querySelector(config.NsliderCard1);
      const NsliderCard2 = this.NsliderCard2 = document.querySelector(config.NsliderCard2);
      const NsliderCard3 = this.NsliderCard3 = document.querySelector(config.NsliderCard3);
      const NsliderCard4 = this.NsliderCard4 = document.querySelector(config.NsliderCard4);
      const NsC1 = this.NsliderClick1 = document.querySelector(config.NsliderClick1);
      const NsC2 = this.NsliderClick2 = document.querySelector(config.NsliderClick2);
      const NsC3 = this.NsliderClick3 = document.querySelector(config.NsliderClick3);
      const NsC4 = this.NsliderClick4 = document.querySelector(config.NsliderClick4);
          for (let c = 0; c < NsliderClicks.length; c++) {
            NsliderClicks[c].addEventListener('click', function () {
              for (let k = 0; k < NsliderClicks.length; k++) {
                NsliderClicks[c].classList.remove('active2');
                NsliderClicks[k].classList.remove('active2');
              }
              NsliderClicks[c].classList.add('active2');
              if(NsC2.classList.contains('active2')){
                NslideMain.style.transform = `translateX(-51%)`;
                NsliderCard1.classList.remove('slider__shadow');
                NsliderCard3.classList.remove('slider__shadow');
                NsliderCard4.classList.remove('slider__shadow');
                NsliderCard2.classList.add('slider__shadow');
                NsliderCard2.style = `opacity: 1`;
                NsliderCard3.style = `opacity: 0.3`;
                NsliderCard4.style = `opacity: 0.3`;
                NsliderCard1.style = `opacity: 0.3`;
              }else if(NsC3.classList.contains('active2')){
                NslideMain.style.transform = `translateX(-120%)`;
                NsliderCard2.classList.remove('slider__shadow');
                NsliderCard2.classList.remove('slider__shadow');
                NsliderCard4.classList.remove('slider__shadow');
                NsliderCard3.classList.add('slider__shadow');
                NsliderCard3.style = `opacity: 1`;
                NsliderCard2.style = `opacity: 0.3`;
                NsliderCard4.style = `opacity: 0.3`;
                NsliderCard1.style = `opacity: 0.3`;
              }else if(NsC4.classList.contains('active2')){
                NslideMain.style.transform = `translateX(-180%)`;
                NsliderCard1.classList.remove('slider__shadow');
                NsliderCard2.classList.remove('slider__shadow');
                NsliderCard3.classList.remove('slider__shadow');
                NsliderCard4.classList.add('slider__shadow');
                NsliderCard4.style = `opacity: 1`;
                NsliderCard3.style = `opacity: 0.3`;
                NsliderCard2.style = `opacity: 0.3`;
                NsliderCard1.style = `opacity: 0.3`;
              }else if(NsC1.classList.contains('active2')){
                NslideMain.style.transform = `translateX(0)`;
                NsliderCard4.classList.remove('slider__shadow');
                NsliderCard3.classList.remove('slider__shadow');
                NsliderCard2.classList.remove('slider__shadow');
                NsliderCard1.classList.add('slider__shadow');
                NsliderCard1.style = `opacity: 1`;
                NsliderCard3.style = `opacity: 0.3`;
                NsliderCard4.style = `opacity: 0.3`;
                NsliderCard2.style = `opacity: 0.3`;
              }
              
            })
          }
          
        }
        
      }

const slider1 = new Slider2({
  NsliderMain: `.slide__all`,
  NsliderCard: `.slide__all_card`,
  NsliderClick: `.slayd__klik`,
  NsliderClick1: `.slayd__click1`,
  NsliderClick2: `.slayd__click2`,
  NsliderClick3: `.slayd__click3`,
  NsliderClick4: `.slayd__click4`,
  NsliderCard1: '.slide__all_card_1',
  NsliderCard2: '.slide__all_card_2',
  NsliderCard3: '.slide__all_card_3',
  NsliderCard4: '.slide__all_card_4',
})



