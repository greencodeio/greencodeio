let menuTogle = document.querySelector('.toggle-button');
let searchButton = document.querySelector('.search')
let searchField = document.querySelector('.header__search-field')

menuTogle.addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('opened');
    document.querySelector('body').classList.toggle('locked');
})

searchButton.addEventListener('click', function () {
    searchField.classList.toggle('active');
})
