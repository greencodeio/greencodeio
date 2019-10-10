let menuTogle = document.querySelector('.toggle-button');

menuTogle.addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('opened');
    document.querySelector('body').classList.toggle('locked');
})
