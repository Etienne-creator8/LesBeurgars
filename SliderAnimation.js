let slideIndex = 1;

const slides = document.querySelectorAll(".mySlides");
const wrapper = document.querySelector(".slides-wrapper");
const thumbs = document.querySelectorAll(".Image");

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  wrapper.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;

  thumbs.forEach(thumb => {
    thumb.classList.remove("active-thumb");
    thumb.style.display = "none";
  });

  thumbs[slideIndex - 1].classList.add("active-thumb");

  let start = slideIndex - 3;
  let end = slideIndex + 1;

  if (start < 0) {
    start = 0;
    end = 4;
  }

  if (end >= thumbs.length) {
    end = thumbs.length - 1;
    start = thumbs.length - 5;
  }

  for (let i = start; i <= end; i++) {
    thumbs[i].style.display = "block";
  }
}