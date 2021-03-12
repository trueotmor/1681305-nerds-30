let slide1Remove = document.querySelector('.advantages-slide:nth-child(1)');
let slide2Remove = document.querySelector('.advantages-slide:nth-child(2)');
let slide3Remove = document.querySelector('.advantages-slide:nth-child(3)');
let slide1 = document.querySelector('.advantages-slide:nth-child(1)');
let slide2 = document.querySelector('.advantages-slide:nth-child(2)');
let slide3 = document.querySelector('.advantages-slide:nth-child(3)');
let slideButton1 = document.querySelector('.slider-controls button:nth-child(1)');
let slideButton2 = document.querySelector('.slider-controls button:nth-child(2)');
let slideButton3 = document.querySelector('.slider-controls button:nth-child(3)');


slide1.classList.add('slide-current');


slideButton1.onclick = function () {
  slide2Remove.classList.remove('slide-current')
  slide3Remove.classList.remove('slide-current')
  slide1.classList.add('slide-current')
  slideButton2.classList.remove('current')
  slideButton3.classList.remove('current')
  slideButton1.classList.add('current')
};


slideButton2.onclick = function () {
  slide1Remove.classList.remove('slide-current')
  slide3Remove.classList.remove('slide-current')
  slide2.classList.add('slide-current')
  slideButton1.classList.remove('current')
  slideButton3.classList.remove('current')
  slideButton2.classList.add('current')
};

slideButton3.onclick = function () {
  slide1Remove.classList.remove('slide-current')
  slide2Remove.classList.remove('slide-current')
  slide3.classList.add('slide-current')
  slideButton2.classList.remove('current')
  slideButton1.classList.remove('current')
  slideButton3.classList.add('current')
};



