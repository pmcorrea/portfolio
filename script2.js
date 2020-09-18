function showNavMenu(x) {
	x.classList.toggle("change");

	let mc = document.getElementsByClassName("menu-contact")[0];
	mc.classList.toggle("hidden");

	let ml = document.getElementsByClassName("menu-links")[0];
	ml.classList.toggle("hidden");
}

// hides nav menu
function hideMenu(x) {
	let mcon = document.getElementsByClassName("menu-container")[0];
	mcon.classList.toggle("change");

	let mc = document.getElementsByClassName("menu-contact")[0];
	mc.classList.toggle("hidden");

	let ml = document.getElementsByClassName("menu-links")[0];
	ml.classList.toggle("hidden");
}
