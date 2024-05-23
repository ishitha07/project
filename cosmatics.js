var slideIndex1 = 0;
showSlides1();

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function showSlides1() {
  var i;
  var slides1 = document.querySelectorAll('.box1 .slide');
  if (slideIndex1 >= slides1.length) {
    slideIndex1 = 0;
  }
  if (slideIndex1 < 0) {
    slideIndex1 = slides1.length - 5;
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = slideIndex1; i < slideIndex1 + 5; i++) {
    if (slides1[i]) {
      slides1[i].style.display = "block";
    }
  }
}


