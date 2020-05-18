let imgIdxDarkLanding = 0;
showImgDarkLanding();

function changeImgDarkLanding(n) {
  // Find the total number of imgs
  let imgs = document.getElementsByClassName("dark-landing-container")
  last_idx = imgs.length - 1
  let newIdx = n + imgIdxDarkLanding

  // If the new index is greater than the last idx
  if (newIdx > last_idx) {
    imgIdxDarkLanding = 0
    console.log('1', imgIdxDarkLanding)
    showImgDarkLanding()
    return
  }

  // If the new index is less than the first idx
  if (newIdx < 0) {
    imgIdxDarkLanding = last_idx
    console.log('2', imgIdxDarkLanding)
    showImgDarkLanding()
    return
  }

  imgIdxDarkLanding = newIdx
  console.log('3', imgIdxDarkLanding)
  showImgDarkLanding()
  return
}

function selectImgDarkLanding(n) {
  imgIdxDarkLanding = n
  showImgDarkLanding();
}

function showImgDarkLanding() {
  // Select containers and dots
  let imgs = document.getElementsByClassName("dark-landing-container")
  let dots = document.getElementsByClassName("darkLandingDot")

  // Hide containers
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none"
  }

  // Deactivate dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }

  // Display the selected container and dots
  imgs[imgIdxDarkLanding].style.display = "block"
  dots[imgIdxDarkLanding].className += " active"
}
