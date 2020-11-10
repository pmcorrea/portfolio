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

const createEditors = function () {
	const textareas = document.getElementsByClassName("code-editors");

	for (let i = 0; i < textareas.length; i++) {
		new CodeMirror.fromTextArea(document.getElementById(`editor${i}`), {
			lineNumbers: true,
			mode: "javascript",
			theme: "material",
			lineWrapping: true,
			tabSize: 2,
			matchBrackets: true,
			readOnly: true,
		});
	}
};

createEditors();
