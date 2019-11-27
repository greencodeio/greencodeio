
    let dots = document.querySelector('.dots');
    let more = document.querySelector('.more');
    let nav__list = document.querySelector('.nav__list')

    let btn = document.querySelector('.buy-water__description_button').addEventListener('click', function(){
        dots.style.display = 'none';
        more.style.display = 'inline';
        btn.style.display = 'none';
    });
    

    let toggleBtn = document.querySelector('.nav__toggle-button').addEventListener('click', function () {
        this.classList.toggle('nav__toggle-active');
        nav__list.classList.toggle('nav__opened');
    })

    let slides = document.querySelectorAll('.slider-block__slides');
    let count = 0;

    let btnPrev = document.querySelector('.slider-block__prev');
    let btnNext = document.querySelector('.slider-block__next');

    btnNext.addEventListener('click', function() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add('opacity-zero')           
        }

        slides[count].classList.remove('opacity-zero') 

        if (count+1 === slides.length) {
            count = 0;
        } else {
            count += 1
        }
        console.log(count)    
    })

    btnPrev.addEventListener('click', function() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add('opacity-zero')           
        }

        slides[count].classList.remove('opacity-zero') 

        if (count - 1 === -1) {
            count = slides.length-1;
        } else {
            count -= 1;
        }
        console.log(count)    
    })

    console.log(count)