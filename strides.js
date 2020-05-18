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



// STRIDES // // STRIDES // // STRIDES // // STRIDES // // STRIDES //

let imgIdx = 0;
showImg();

function changeImg(n) {
  // Find the total number of imgs
  let imgs = document.getElementsByClassName("strides-container")
  last_idx = imgs.length - 1
  let newIdx = n + imgIdx

  // If the new index is greater than the last idx
  if (newIdx > last_idx) {
    imgIdx = 0
    console.log('1', imgIdx)
    showImg()
    return
  }

  // If the new index is less than the first idx
  if (newIdx < 0) {
    imgIdx = last_idx
    console.log('2', imgIdx)
    showImg()
    return
  }

  imgIdx = newIdx
  console.log('3', imgIdx)
  showImg()
  return
}

function selectImg(n) {
  imgIdx = n
  showImg();
}

function showImg() {
  // Select containers and dots
  let imgs = document.getElementsByClassName("strides-container")
  let dots = document.getElementsByClassName("stridesDot")

  // Hide containers
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none"
  }

  // Deactivate dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }

  // Display the selected container and dots
  imgs[imgIdx].style.display = "block"
  dots[imgIdx].className += " active"
}
