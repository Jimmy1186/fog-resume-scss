var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var Pslides = document.getElementsByClassName("photo-Slides");
  var Eslides = document.getElementsByClassName("exp-Slides");
  var dots = document.getElementsByClassName("dot");

  if (n > Pslides.length) 
  {slideIndex = 1}

  if (n < 1) 
  {slideIndex = Pslides.length}

  for (i = 0; i < Pslides.length; i++) {
      Pslides[i].style.display = "none";  
      Eslides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  Pslides[slideIndex-1].style.display = "block";  
  Eslides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}