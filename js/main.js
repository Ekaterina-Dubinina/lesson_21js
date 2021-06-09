const carousel = new SwipeCarousel({
  containerID: '#carousel',
  
  interval: 2000,
  
});

 carousel.init();



/* eslint-disable default-case */
/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
/* eslint-disable no-undef */


/*(function () {
const container = document.querySelector("#carousel");
const slides = container.querySelectorAll(".slide");
const indicatorsContainer = container.querySelector("#indicators-container");
const indicators = indicatorsContainer.querySelectorAll(".indicator");
const pauseBtn = container.querySelector("#pause");
const prevBtn = container.querySelector("#prev");
const nextBtn = container.querySelector("#next");

const CODE_SPACE = "Space";
const CODE_ARROW_LEFT = "ArrowLeft";
const CODE_ARROW_RIGHT = "ArrowRight";

let slidesCount = slides.length;
let currentSlide = 0;
let timerID = null;
let isPlaying = true;
let swipeStartX = null;
let swipeEndX = null;


function gotoSlide() {
  console.log(n);
  slides[currentSlide].classList.toggle("active");
  indicators[currentSlide].classList.toggle("active");
  currentSlide = (n + slidesCount) % slidesCount;
  slides[currentSlide].classList.toggle("active");
  indicators[currentSlide].classList.toggle("active");
}
const prevSlide = () => gotoSlide(currentSlide - 1);

const nextSlide = () => gotoSlide(currentSlide + 1);

function prev() {
  pause();
  prevSlide();
}
function next() {
  pause();
  nextSlide();
}

function pause() {
  if (isPlaying) {
    console.log("pause");
    pauseBtn.innerHTML = "Play";
    isPlaying = false;
    clearInterval(timerID);
  }
}
function play() {
  pauseBtn.innerHTML = "Pause";
  isPlaying = true;
  let timerID = setInterval(nextSlide, 1000);
}

const pausePlay = () => (isPlaying ? pause() : play());

function indicate(e) {
  consttarget = e.target;

  if (target && target.classlist.contains("indicator")) {
    pause();

    gotoSlide(+target.dataset.slideTo);
  }
}

function pressKey(e) {
  console.log(e);
  if (e.code === CODE_ARROW_LEFT) prev();
  if (e.code === CODE_ARROW_RIGHT) next();
  if (e.code === CODE_SPACE) pausePlay();
}

const swipeStart = (e) => swipeStartX = e.changedTouches[0].clientX;

function swipeEnd(e) {
  swipeEndX = e.changedTouches[0].clientX;
  swipeStartX - swipeEndX > 100 && next();
  swipeStartX - swipeEndX < 100 && prev();
}

function initListeners() {
pauseBtn.addEventListener("click", pausePlay);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
indicatorsContainer.addEventListener("click", indicate);
document.addEventListener("keydown", pressKey);
container.addEventListener('touchstart', swipeStart);
container.addEventListener('touchend', swipeEnd);
}

function init() {
  initListeners();
  timerID = setInterval(nextSlide, 2000);
}
 init();
}());*/
 



