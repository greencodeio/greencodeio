let navToggle = document.querySelector('.header__navToggle');
let blockLink = [...document.querySelectorAll('.nav__link_dropdown')];
let dropDownList = [...document.querySelectorAll('.nav__dropdown-list')];

navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('header__navToggle_opened')
    document.querySelector('body').classList.toggle('lock')
    document.querySelector('.nav-bar').classList.toggle('nav-bar__opened')
})

for (let i = 0; i < blockLink.length; i++) {
    blockLink[i].addEventListener('click', function (event) {
        for (let count = 0; count < dropDownList.length; count++) {
            if (i === count) {
                dropDownList[count].classList.toggle('nav__item_dropdown-active');
            }
        }
        event.preventDefault();
    })
}



