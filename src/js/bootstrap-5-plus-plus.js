startMain();

function startMain() {
  // Get document elements
  let images = document.getElementsByTagName(`img`);
  let spinner = document.getElementById(`ms`);
  let mainDiv = document.getElementById(`md`);

  // Function to check whether all the images has been loaded
  function hasAllTheImagesBeenLoaded() {
    for (let image of images) {
      if (!image.complete) return false;
    }
    return true;
  }

  // Schedule the interval to check whether all the images has been loaded
  let interval = setInterval(() => {
    if (hasAllTheImagesBeenLoaded()) {
      spinner.classList.add(`d-none`);
      mainDiv.classList.remove(`d-none`);
      clearInterval(interval);
    }
  }, 100);

}
