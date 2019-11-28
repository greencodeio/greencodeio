if (window.matchMedia('(max-width: 1023px)').matches) {
  let slides = document.querySelectorAll('.slider-block__slides');
  let count = 0;

  let btnPrev = document.querySelector('.slider-block__prev');
  let btnNext = document.querySelector('.slider-block__next');

  btnNext.addEventListener('click', function () {
      for (let i = 0; i < slides.length; i++) {
          slides[i].classList.add('opacity-zero');
      }

      slides[count].classList.remove('opacity-zero');

      if (count + 1 === slides.length) {
          count = 0;
      } else {
          count += 1;
      }
  })

  btnPrev.addEventListener('click', function () {
      for (let i = 0; i < slides.length; i++) {
          slides[i].classList.add('opacity-zero');
      }

      slides[count].classList.remove('opacity-zero');

      if (count - 1 === -1) {
          count = slides.length - 1;
      } else {
          count -= 1;
      }
  })
}