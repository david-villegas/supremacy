$(document).ready(function() {
  console.log( "ready!" );
  var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 800,
		speedAsDuration: true,
		header: '[data-scroll-header]'
	});
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var $top = document.getElementById("myBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    $top.classList.add('show');
  } else {
    $top.classList.remove('show');
  }
}
