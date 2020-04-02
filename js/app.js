$(window).on("scroll", function(){
    if($(this).scrollTop() > 100){
        $("nav").addClass("fixed_nav");
    }
    else{
        $("nav").removeClass("fixed_nav");
    }
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  })
});

$("#open_btn").on("click", function (){
  $(".mobile_nav").toggleClass("slide");
});

