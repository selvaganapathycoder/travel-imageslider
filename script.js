const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('show'));
  slides[i].classList.add('show');
}

prev.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

next.onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};