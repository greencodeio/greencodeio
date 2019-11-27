
    let dots = document.querySelector('.dots');
    let more = document.querySelector('.more');
    let btn = document.querySelector('.buy-water__description_button');

    btn.addEventListener('click', function(){
        dots.style.display = 'none';
        more.style.display = 'inline';
        btn.style.display = 'none';
    })
