	var link = document.querySelector(".write_us_btn");
	var popup = document.querySelector(".modal_content");
	var close = document.querySelector(".modal_content_close");

	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("modal_content_show");
	});

	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal_content_show");
	});

	window.addEventListener("keydown", function(event) {
		if (event.keyCode == 27) {
			if (popup.classList.contains("modal_content_show")) {
				popup.classList.remove("modal_content_show");
			}
		}
	});