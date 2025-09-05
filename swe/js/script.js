let index = 0;
const slides = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');


slides[index].classList.add('active');

function showSlide(n) {
  slides[index].classList.remove('active');
  index = (n + slides.length) % slides.length; // xử lý vòng lặp
  slides[index].classList.add('active');
}


setInterval(() => {
  showSlide(index + 1);
}, 3000);


prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

