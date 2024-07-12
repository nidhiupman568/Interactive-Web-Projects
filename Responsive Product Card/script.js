// Script.js
document.addEventListener("DOMContentLoaded", function () {
	const images = document.querySelectorAll("img");
	images.forEach(image => {
		image.addEventListener("mouseenter",
			function () {
				this.style.transform = "scale(1.1) translateY(-15px)";
				this.style.boxShadow = "5px 20px 30px rgba(0, 0, 0, 0.2)";
			});
		image.addEventListener("mouseleave",
			function () {
				this.style.transform = "scale(1) translateY(0)";
				this.style.boxShadow = "none";
			});
	});
});
