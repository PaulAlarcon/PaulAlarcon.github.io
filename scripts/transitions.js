
window.addEventListener('scroll', () => {
    const header = document.querySelector("header");
    header.classList.toggle('versatile', window.scrollY  > 0)
    const lastOne = document.querySelector("#projects");
    header.classList.toggle('puff', window.scrollY  >= lastOne.offsetTop)
})

ScrollReveal().reveal("#home", {
    delay: 400,
    distance: "100px",
    duration: 1000,
    easing: "ease-in",
    origin: "left",
  });
  
  ScrollReveal().reveal("#about", {
    delay: 400,
    distance: "100px",
    duration: 1000,
    easing: "ease-in",
    origin: "right",
  });

  ScrollReveal().reveal("#projects", {
    delay: 400,
    distance: "100px",
    duration: 1000,
    easing: "ease-in",
    origin: "bottom",
  });

