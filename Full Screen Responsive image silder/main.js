const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // get current class //
    const current = document.querySelector('.current')

    // remove current class //
    current.classList.remove('current');

    // check for next slide //

    if (current.nextElementSibling) {
        //   add current to next sibling //
        current.nextElementSibling.classList.add('current');
    } else {
        //  add current to start //
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // get current class //
    const current = document.querySelectorAll('.current')

    // remove current class//
    current.classList.remove('current');

    // check for prev slide //
    if (current.prevElementSibling) {
        // Add current to prev Sibling //
        current.prevElementSibling.classList.add('current');
    } else {
        // Add current to last //
        slides[slides.lenght - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// button Event//
next.addEventListener('click', e => {
    nextSlide();
});
if (auto){
    clearInterval(slideInterval);
slideInterval = setInterval(nextSlide, intervalTime);
}

prev.addEventListener('click', e => {
    prevSlide();
});

if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(prevSlide, intervalTime);
}

// Auto slide //
if(auto) {
    // Run next slide at interval //
    slideInterval = setInterval(nextSlide, intervalTime);

}
