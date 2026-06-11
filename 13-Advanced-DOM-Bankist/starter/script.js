'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const header = document.querySelector('header');
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const sectionOne = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// buttonScrollTo.addEventListener('click', function (e) {
//   e.preventDefault();
//   // const s1Coords = sectionOne.getBoundingClientRect();

//   // window.scrollTo({
//   //   left: s1Coords.left + window.pageXOffset,
//   //   top: s1Coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });
//   sectionOne.scrollIntoView({ behavior: 'smooth' });
// });

///////////////////////////////////////
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     const section = document.querySelector(id);
//     section.scrollIntoView({ behavior: 'smooth' });
//   });
// });

const navLink = document.querySelector('.nav__links');

navLink.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// const allSections = document.querySelectorAll('.section');

// const allButtons = document.getElementsByTagName('button');

// const allBtn = document.getElementsByClassName('btn');

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved security and analytics <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
// header.append(message);

// document
//   .querySelector('.btn')
//   .addEventListener(
//     'click',
//     e => (document.querySelector('.btn').style.backgroundColor = 'red'),
//   );

// message.style.backgroundColor = 'rgb(130,230,230)';
// message.style.color = 'white';
// message.style.width = '120%';

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';

// const logo = document.querySelector('.nav__logo');

// logo.classList.add('c', 'j');

// const buttonScrollTo = document.querySelector('.btn--scroll-to');
// const sectionOne = document.querySelector('#section--1');

// buttonScrollTo.addEventListener('mousewheel', function (e) {
//   e.preventDefault();
//   // const s1Coords = sectionOne.getBoundingClientRect();

//   // window.scrollTo({
//   //   left: s1Coords.left + window.pageXOffset,
//   //   top: s1Coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });
//   sectionOne.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');

// const alertH1 = e => {
//   alert('This is a Mouse Event message');
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// const h1 = document.querySelector('h1');

// console.log(h1);

// const childNode = h1.querySelectorAll('.highlight');

// console.log(childNode);

// console.log(h1.childNodes);

// h1.closest('.nav').style.background = 'var( --gradient-secondary)';

// // h1.style.background = 'var( --gradient-secondary)';

/////////////////////////////////////////////////////
// Tab Components

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // Active Tab
  tabs.forEach(el => el.classList.remove('operations__tab--active'));

  tabsContent.forEach(cl => cl.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  // Active Content
  const tab = clicked.dataset.tab;
  const className = 'operations__content--' + tab;

  const content = document.querySelector(`.${className}`);

  content.classList.add('operations__content--active');
});

const nav = document.querySelector('.nav');

const mouseHandler = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing a argument to a handler

nav.addEventListener('mouseover', mouseHandler.bind(0.5));

nav.addEventListener('mouseout', mouseHandler.bind(1));

// Sticky Navigation

// const section1 = document.querySelector('#section--1');

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// const obsCallBack = function (entries, obersver) {
//   console.log(entries);
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);

// observer.observe(section1);

const headerEl = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const obsCallBack = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);

observer.observe(headerEl);

// Revel Sections

const allSections = document.querySelectorAll('.section');

const revealSections = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const secOptions = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealSections, secOptions);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy Loading Images

const lazyImages = document.querySelectorAll('img[data-src]');

const revealFeatures = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
  });
};

const featureOptions = {
  root: null,
  threshold: 0,
  rootMargin: '+200px',
};

const featureObserver = new IntersectionObserver(
  revealFeatures,
  featureOptions,
);

lazyImages.forEach(feature => featureObserver.observe(feature));

// Slider

const slides = document.querySelectorAll('.slide');

const buttonLeft = document.querySelector('.slider__btn--left');
const buttonRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  console.log(slide);
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`),
  );
};

goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

buttonRight.addEventListener('click', nextSlide);
buttonLeft.addEventListener('click', prevSlide);
