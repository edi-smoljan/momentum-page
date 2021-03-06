let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

console.log(window.visualViewport.width)

let callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add("visible");
      }
    });
};

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('#services-detailed article');
targets.forEach(e => observer.observe(e));