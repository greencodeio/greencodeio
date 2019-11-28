if (window.matchMedia('(max-width: 768px)').matches) {
  autoPlaySlider()
  

  let contentSliderList = document.querySelectorAll('.about-us__content');
  let contentDots = document.querySelectorAll('.dot');
  let counter = 0;

  function autoPlaySlider() {
      let timer = setTimeout(function contentSlider() {
          for (let n = 0; n < contentSliderList.length; n++) {
              contentSliderList[n].classList.add('opacity-zero');
          }

          contentSliderList[counter].classList.remove('opacity-zero');

          if (counter + 1 === contentSliderList.length) {
              counter = 0;
          } else {
              counter += 1;
          }


          autoPlaySlider();
      }, 3000)
  }

  for (let k = 0; k < contentDots.length; k++) {
      contentDots[k].addEventListener('click', function () {
          for (let n = 0; n < contentSliderList.length; n++) {
              contentSliderList[n].classList.add('opacity-zero');
          }

          contentSliderList[k].classList.remove('opacity-zero')
      })
  }
}