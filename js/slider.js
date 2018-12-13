document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;

function autoSlider () {
	timer = setTimeout(sliderLeft, 2000);
}

function sliderLeft() {
	var sliderWrapper = document.getElementById('slider__wrapper');
	left = left - 230; /*width img*/
	if (left < -1840) { 
		left = 0;
	}
	sliderWrapper.style.left = left +"px";
	autoSlider();
}
