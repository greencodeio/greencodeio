let nav__list = document.querySelector('.nav__list');
let toggleBtn = document.querySelector('.nav__toggle-button').addEventListener('click', function () {
  this.classList.toggle('nav__toggle-active');
  nav__list.classList.toggle('nav__opened');
})