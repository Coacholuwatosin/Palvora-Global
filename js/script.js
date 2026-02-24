// // Scroll Behaviour

// const scrollButton = document.getElementById("floatingScrollButton");
// const heroSection = document.getElementById("heroSection");

// window.addEventListener("scroll", () => {
//     const heroHeight = heroSection.offsetHeight;

//     if (window.scrollY > heroHeight / 2) {
//         scrollButton.innerHTML = '<i class="ri-arrow-up-line"></i>';
//     } else {
//         scrollButton.innerHTML = '<i class="ri-arrow-down-line"></i>';
//     }
// });

// scrollButton.addEventListener("click", () => {
//     const heroHeight = heroSection.offsetHeight;

//     if (window.scrollY > heroHeight / 2) {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//         window.scrollTo({ top: heroHeight, behavior: "smooth" });
//     }
// });






// // AOS Configue

// AOS.init({
//     duration: 1000,
//     once: true
// });




// // Floating Button





const slider = document.querySelector('.aboutCardRow');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.2;
  slider.scrollLeft = scrollLeft - walk;
});

