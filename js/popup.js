window.onload = function() {
 
var link = document.querySelector(".step__button");
var popup = document.querySelector(".popup-consultation__form");
var close = popup.querySelector(".popup-consultation__close");
var form = popup.querySelector("form");
var tel = popup.querySelector("[name=tel]");
var message = popup.querySelector("[name=message]");
var storage = localStorage.getItem("tel");
var overlay = document.querySelector(".popup-consultation");


link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content__login-show");
	overlay.classList.add("modal-content__overlay-show");
	/*
	if (storage) {
		tel.value = storage;
		password.focus();
	} else {
		tel.focus();
	}*/
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content__login-show");
	popup.classList.remove("modal-error");
	overlay.classList.remove("modal-content__overlay-show");
});

form.addEventListener("submit", function() {
	if (!tel.value || !message.value) {
		event.preventDefault();
		popup.classList.add("modal-error");
	} else {
			localStorage.setItem("tel", tel.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content__login-show")) {
		popup.classList.remove("modal-content__login-show");
		popup.classList.remove("modal-error");
		overlay.classList.remove("modal-content__overlay-show");
		}
	}
})

}

