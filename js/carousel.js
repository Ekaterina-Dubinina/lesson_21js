class Carousel {
  constructor(p) {
    let settings = (() => ({
      ...{
        containerID: "#carousel",
        slideID: ".slide",
        interval: 5000,
        isPlaying: true,
      },
      ...p,
    }))();

    this.container = document.querySelector(settings.containerID);
    this.slides = this.container.querySelectorAll(settings.slideID);

    this.interval = settings.interval;
    this.isPlaying = settings.isPlaying;
  }

  _initProps() {
    this.CODE_SPACE = "Space";
    this.CODE_ARROW_LEFT = "ArrowLeft";
    this.CODE_ARROW_RIGHT = "ArrowRight";

    this.FA_PAUSE = '<i class="far fa-pause-circle"></i>';
    this.FA_PLAY = '<i class="far fa-angle-circle"></i>';
    this.FA_PREV = '<i class="fas fa-angle-left"></i>';
    this.FA_NEXT = '<i class="fas fa-angle-right"></i>';

    this.slidesCount = this.slides.length;
    this.currentSlide = 0;
    // this.timerID = null;
    // this.swipeStartX = null;
    // this.swipeEndX = null;
  }

  _initControls() {
    const controls = document.createElement("div");
    const PAUSE = `<div class="control" id="pause">${
      this.isPlaying ? this.FA_PAUSE : this.FA_PLAY
    }</div> `;
    const PREV = `<div class="control" id="prev">${this.FA_PREV}</div>`;
    const NEXT = `<div class="control" id="next">${this.FA_NEXT}</div>`;

    controls.setAttribute("class", "controls");
    controls.innerHTML = PAUSE + PREV + NEXT;

    this.container.appendChild(controls);

    this.pauseBtn = this.container.querySelector("#pause");
    this.prevBtn = this.container.querySelector("#prev");
    this.nextBtn = this.container.querySelector("#next");
  }

  _initIndicators() {
    const indicators = document.createElement("div");

    indicators.setAttribute("class", "indicators");

    for (let i = 0, n = this.slidesCount; i < n; i++) {
      const indicator = document.createElement("div");

      indicator.setAttribute("class", "indicator");
      indicator.dataset.slideTo = `${i}`;
      if (i === 0) indicator.classList.add("active");

      indicators.appendChild(indicator);
    }
    this.container.appendChild(indicators);

    this.indicatorsContainer = this.container.querySelector(".indicators");
    this.indicators = this.indicatorsContainer.querySelectorAll(".indicator");
  }

  _initListeners() {
    document.addEventListener("keydown", this.pressKey.bind(this));
    this.pauseBtn.addEventListener("click", this.pausePlay.bind(this));
    this.prevBtn.addEventListener("click", this.prev.bind(this));
    this.nextBtn.addEventListener("click", this.next.bind(this));
    this.indicatorsContainer.addEventListener(
      "click",
      this._indicate.bind(this)
    );
  }

  gotoSlide(n) {
    this.slides[this.currentSlide].classList.toggle("active");
    this.indicators[this.currentSlide].classList.toggle("active");
    this.currentSlide = (n + this.slidesCount) % this.slidesCount;
    this.slides[this.currentSlide].classList.toggle("active");
    this.indicators[this.currentSlide].classList.toggle("active");
  }

  prevSlide() {
    this.gotoSlide(this.currentSlide - 1);
  }

  nextSlide() {
    this.gotoSlide(this.currentSlide + 1);
  }

  prev() {
    this.pause();
    this.prevSlide();
  }
  next() {
    this.pause();
    this.nextSlide();
  }

  pause() {
    if (this.isPlaying) {
      console.log("pause");
      this.pauseBtn.innerHTML = this.FA_PLAY;
      this.isPlaying = false;
      clearInterval(this.timerID);
    }
  }
  play() {
    this.pauseBtn.innerHTML = this.FA_PAUSE;
    this.isPlaying = true;
    this.timerID = setInterval(() => this.nextSlide(), this.interval);
  }

  pausePlay() {
    this.isPlaying ? this.pause() : this.play();
  }

  indicate(e) {
    consttarget = e.target;

    if (target && target.classlist.contains("indicator")) {
      this.pause();

      this.gotoSlide(+target.dataset.slideTo);
    }
  }

  pressKey(e) {
    if (e.code === this.CODE_ARROW_LEFT) this.prev();
    if (e.code === this.CODE_ARROW_RIGHT) this.next();
    if (e.code === this.CODE_SPACE) this.pausePlay();
  }

  init() {
    this._initProps();
    this._initControls();
    this._initIndicators();
    this._initListeners();

    if (this.isPlaying)
      this.timerID = setInterval(() => this.nextSlide(), this.interval);
  }
}
class SwipeCarousel extends Carousel {
  _initListeners() {
    super._initListeners();
    this.container.addEventListener("touchstart", this.swipeStart.bind(this));
    this.container.addEventListener("touchend", this.swipeEnd.bind(this));
  }

  swipeStart(e) {
    this.swipeStartX = e.changedTouches[0].clientX;
  }

  swipeEnd(e) {
    this.swipeEndX = e.changedTouches[0].clientX;
    this.swipeStartX - this.swipeEndX > 100 && this.next();
    this.swipeStartX - this.swipeEndX < -100 && this.prev();
  }
}

// this.container.addEventListener("touchstart", this.swipeStart.bind(this));
//     this.container.addEventListener("touchend", this.swipeEnd.bind(this));
// swipeStart(e) {
//   this.swipeStartX = e.changedTouches[0].clientX;
// },

// swipeEnd(e) {
//   this.swipeEndX = e.changedTouches[0].clientX;
//   this.swipeStartX - this.swipeEndX > 100 && this.next();
//   this.swipeStartX - this.swipeEndX < 100 && this.prev();
// },

// console.dir(Carousel.prototype);
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
  
  
  function gotoSlide(n) {
    console.log(n);
    slides[currentSlide].classList.toggle('active');
    indicators[currentSlide].classList.toggle('active');
    currentSlide = (n + slidesCount) % slidesCount;
    slides[currentSlide].classList.toggle('active');
    indicators[currentSlide].classList.toggle('active');
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
// _initConfig(o) {
//   // if (typeof obj !== 'undefined'){
//   // settings.containerID = obj.containerID || settings.containerID;
//   // settings.slideID = obj.slideID || settings.slideID;
//   // settings.interval = obj.interval || settings.interval;
//   // settings.isPlaying = obj.isPlaying || settings.isPlaying;}
//   return {...{containerID = '#carousel', slideID = '.slide', interval = 5000, isPlaying = true}, ...o};
// }
