let slideIndex = 0;
let el = document.getElementsByClassName('slideshow-elements')[0];
let userFugged = false;

// Next/previous controls
function plusSlides(n, fugged_by_user=true) {
    userFugged = fugged_by_user;
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

setInterval(() => {
    if (!userFugged)
        plusSlides(1, false);
    else
        userFugged = false;
}, 5000);