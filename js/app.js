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
