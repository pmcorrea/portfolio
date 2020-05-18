
let imgIdxCentr = 0;
showImgCentr();

function changeImgCentr(n) {
  // Find the total number of imgs
  let imgs = document.getElementsByClassName("centr-container")
  last_idx = imgs.length - 1
  let newIdx = n + imgIdxCentr

  // If the new index is greater than the last idx
  if (newIdx > last_idx) {
    imgIdxCentr = 0
    console.log('1', imgIdxCentr)
    showImgCentr()
    return
  }

  // If the new index is less than the first idx
  if (newIdx < 0) {
    imgIdxCentr = last_idx
    console.log('2', imgIdxCentr)
    showImgCentr()
    return
  }

  imgIdxCentr = newIdx
  console.log('3', imgIdxCentr)
  showImgCentr()
  return
}

function selectImgCentr(n) {
  imgIdxCentr = n
  showImgCentr();
}

function showImgCentr() {
  // Select containers and dots
  let imgs = document.getElementsByClassName("centr-container")
  let dots = document.getElementsByClassName("centrDot")

  // Hide containers
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none"
  }

  // Deactivate dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }

  // Display the selected container and dots
  imgs[imgIdxCentr].style.display = "block"
  dots[imgIdxCentr].className += " active"
}
