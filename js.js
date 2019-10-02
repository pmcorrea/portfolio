// Trigger: Click on hamburger stack
// Behavior: expands to show nav
function showNavMenu(x) {
  x.classList.toggle("change");
  $('.menu-contact').toggleClass("hidden");
  $('.menu-links').toggleClass("hidden");
}

// hides nav menu
function hideMenu(x) {
  $('.menu-container').toggleClass("change");
  $('.menu-contact').toggleClass("hidden");
  $('.menu-links').toggleClass("hidden");
}
