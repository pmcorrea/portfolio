let imgIdxCentr = 0;
let imgIdxDarkLanding = 0;
let imgIdxStrides = 0;

function changeImg(n, name) {
	let imgClass;
	let dotClass;
	let currentIdx;

	switch (name) {
		case "strides":
			imgClass = "strides-container";
			dotClass = "stridesDot";
			currentIdx = imgIdxStrides;
			break;

		case "fylo":
			imgClass = "dark-landing-container";
			dotClass = "darkLandingDot";
			currentIdx = imgIdxDarkLanding;
			break;

		case "centr":
			imgClass = "centr-container";
			dotClass = "centrDot";
			currentIdx = imgIdxCentr;
			break;
	}

	let last_idx = document.getElementsByClassName(imgClass).length - 1;
	currentIdx += n;

	// If the new index is greater than the last idx
	if (currentIdx > last_idx) {
		currentIdx = 0;

		switch (name) {
			case "strides":
				imgIdxStrides = currentIdx;

			case "centr":
				imgIdxCentr = currentIdx;

			case "fylo":
				imgIdxDarkLanding = currentIdx;
		}

		displayImg(currentIdx, imgClass, dotClass);
		return;
	}

	// If the new index is less than the first idx
	if (currentIdx < 0) {
		currentIdx = last_idx;
		switch (name) {
			case "strides":
				imgIdxStrides = currentIdx;

			case "centr":
				imgIdxCentr = currentIdx;

			case "fylo":
				imgIdxDarkLanding = currentIdx;
		}
		displayImg(currentIdx, imgClass, dotClass);
		return;
	}

	switch (name) {
		case "strides":
			imgIdxStrides = currentIdx;

		case "centr":
			imgIdxCentr = currentIdx;

		case "fylo":
			imgIdxDarkLanding = currentIdx;
	}

	displayImg(currentIdx, imgClass, dotClass);

	return;
}

function displayImg(n, imgsClass, dotsClass) {
	// Select containers and dots
	let imgs = document.getElementsByClassName(imgsClass);
	let dots = document.getElementsByClassName(dotsClass);

	// Hide containers and dots
	for (let i = 0; i < imgs.length; i++) {
		imgs[i].style.display = "none";
		dots[i].className = dots[i].className.replace(" active", "");
	}

	// Display the selected container and dots
	imgs[n].style.display = "block";
	dots[n].className += " active";

	switch (imgsClass) {
		case "strides-container":
			imgIdxStrides = n;
			break;

		case "dark-landing-container":
			imgIdxDarkLanding = n;
			break;

		case "centr-container":
			imgIdxCentr = n;
			break;
	}
}

function showNavMenu() {
	let hamburger_stack = document.getElementsByClassName("mobile-menu")[0]
		.children;
	hamburger_stack[0].classList.toggle("change");
	hamburger_stack[1].classList.toggle("change");
	hamburger_stack[2].classList.toggle("change");

	document.getElementsByTagName("nav")[0].classList.toggle("cover");

	let navbar_contacts = document.getElementsByClassName("navbar-contact")[0];
	navbar_contacts.classList.toggle("hidden");

	let navbar_links = document.getElementsByClassName("navbar-links")[0];
	navbar_links.classList.toggle("hidden");
}

function hideMenu() {
	let hamburger_stack = document.getElementsByClassName("mobile-menu")[0]
		.children;
	hamburger_stack[0].classList.toggle("change");
	hamburger_stack[1].classList.toggle("change");
	hamburger_stack[2].classList.toggle("change");
	document.getElementsByTagName("nav")[0].classList.toggle("cover");

	let navbar_contacts = document.getElementsByClassName("navbar-contact")[0];
	navbar_contacts.classList.toggle("hidden");

	let navbar_links = document.getElementsByClassName("navbar-links")[0];
	navbar_links.classList.toggle("hidden");
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
	if (window.innerWidth < 720 && window.pageYOffset > 100) {
		console.log(window.innerWidth);
		let currentScrollPos = window.pageYOffset;
		// scrolling down
		if (prevScrollpos > currentScrollPos) {
			document.getElementsByTagName("nav")[0].style.top = "0";
			// scrolling up
		} else if (prevScrollpos < currentScrollPos) {
			document.getElementsByTagName("nav")[0].style.top = "-50px";
		}
		prevScrollpos = currentScrollPos;
	}
};

displayImg(0, "centr-container", "centrDot");
displayImg(0, "dark-landing-container", "darkLandingDot");
displayImg(0, "strides-container", "stridesDot");
