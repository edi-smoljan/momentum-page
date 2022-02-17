let slideIndex = 0;
let el = document.getElementsByClassName('slideshow-elements')[0];

// Next/previous controls
function plusSlides(n) {
    const oldIndex = slideIndex;
    slideIndex += n;
    if (slideIndex < 0)
        slideIndex += (Math.floor(-slideIndex/5) + 1) * 5;
    slideIndex = slideIndex % 5;
    showSlides(slideIndex, oldIndex);
}

function showSlides(newIndex, oldIndex) {
    const replaced = 
        el.classList.replace(`translate${oldIndex}`, 
        `translate${newIndex}`);
}

setInterval(plusSlides, 5000, 1);