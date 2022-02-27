let message = document.querySelector("#message");

window.addEventListener('scroll', function() {
    const val = window.scrollY;
    message.style.top = `calc(100% - ${val*1.2}px)`;
})