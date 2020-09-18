let imgIdxCentr = 0;
let imgIdxDarkLanding = 0;
let imgIdxStrides = 0;
displayImg(0, "centr-container", "centrDot");
displayImg(0, "dark-landing-container", "darkLandingDot");
displayImg(0, "strides-container", "stridesDot");

function changeImgStrides(n, imgClass, dotClass) {
	// Find the total number of imgs
	let imgs = document.getElementsByClassName(imgClass);
	last_idx = imgs.length - 1;
	let newIdx = n + imgIdxStrides;

	// If the new index is greater than the last idx
	if (newIdx > last_idx) {
		imgIdxStrides = 0;
		displayImg(imgIdxStrides, imgClass, dotClass);
		return;
	}

	// If the new index is less than the first idx
	if (newIdx < 0) {
		imgIdxStrides = last_idx;
		displayImg(imgIdxStrides, imgClass, dotClass);
		return;
	}

	imgIdxStrides = newIdx;
	displayImg(imgIdxStrides, imgClass, dotClass);
	return;
}

function changeImgCentr(n, imgClass, dotClass) {
	// Find the total number of imgs
	let imgs = document.getElementsByClassName(imgClass);
	last_idx = imgs.length - 1;
	let newIdx = n + imgIdxCentr;

	// If the new index is greater than the last idx
	if (newIdx > last_idx) {
		imgIdxCentr = 0;
		displayImg(imgIdxCentr, imgClass, dotClass);
		return;
	}

	// If the new index is less than the first idx
	if (newIdx < 0) {
		imgIdxCentr = last_idx;
		displayImg(imgIdxCentr, imgClass, dotClass);
		return;
	}

	imgIdxCentr = newIdx;
	displayImg(imgIdxCentr, imgClass, dotClass);
	return;
}

function changeImgDarkLanding(n, imgClass, dotClass) {
	// Find the total number of imgs
	let imgs = document.getElementsByClassName(imgClass);
	last_idx = imgs.length - 1;
	let newIdx = n + imgIdxDarkLanding;

	// If the new index is greater than the last idx
	if (newIdx > last_idx) {
		imgIdxDarkLanding = 0;
		displayImg(imgIdxDarkLanding, imgClass, dotClass);
		return;
	}

	// If the new index is less than the first idx
	if (newIdx < 0) {
		imgIdxDarkLanding = last_idx;
		displayImg(imgIdxDarkLanding, imgClass, dotClass);
		return;
	}

	imgIdxDarkLanding = newIdx;
	displayImg(imgIdxDarkLanding, imgClass, dotClass);
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
}
