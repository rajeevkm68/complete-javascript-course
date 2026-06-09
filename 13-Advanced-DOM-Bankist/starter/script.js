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

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  const tab = clicked.dataset.tab;
  const className = 'operations__content--' + tab;

  tabsContent.forEach(el => el.classList.remove('operations__content--active'));
  const content = document.querySelector(`.${className}`);

  content.classList.add('operations__content--active');
});
