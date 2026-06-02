'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const header = document.querySelector('header');

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

const allSections = document.querySelectorAll('.section');

const allButtons = document.getElementsByTagName('button');

const allBtn = document.getElementsByClassName('btn');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved security and analytics <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
header.append(message);

document
  .querySelector('.btn')
  .addEventListener(
    'click',
    e => (document.querySelector('.btn').style.backgroundColor = 'red'),
  );

message.style.backgroundColor = 'rgb(130,230,230)';
message.style.color = 'white';
message.style.width = '120%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';

const logo = document.querySelector('.nav__logo');

console.log(logo);
logo.classList.add('c', 'j');
