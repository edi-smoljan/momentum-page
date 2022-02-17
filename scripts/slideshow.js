let slideIndex = 0;
let el = document.getElementsByClassName('slideshow-elements')[0];

// Next/previous controls
function plusSlides(n) {
    const oldIndex = slideIndex;
    slideIndex += n;
    slideIndex = slideIndex % 5;
    showSlides(slideIndex, oldIndex);
}

function showSlides(newIndex, oldIndex) {
    const replaced = 
        el.classList.replace(`translate${oldIndex}`, 
        `translate${newIndex}`);
    console.log("replaced", replaced);
}