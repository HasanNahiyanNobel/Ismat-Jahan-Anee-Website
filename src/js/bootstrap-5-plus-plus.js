startMain();

function startMain() {
  // Get document elements
  let images = document.getElementsByTagName(`img`);
  let spinner = document.getElementById(`ms`);
  let mainDiv = document.getElementById(`md`);

  // Schedule the interval to check whether all the images has been loaded
  let interval = setInterval(() => {
    if (hasAllTheImagesBeenLoaded()) {
      spinner.classList.add(`d-none`);
      mainDiv.classList.remove(`d-none`);
      clearInterval(interval);
    }
  }, 100);

  // Add event listener to collapse the navbar after an item has been tapped
  collapseNavbarOnClick();

  function hasAllTheImagesBeenLoaded() {
    /**
     * Returns true if all the images have been loaded.
     * Returns false otherwise.
     */
    for (let image of images) {
      if (!image.complete) return false;
    }
    return true;
  }

  function collapseNavbarOnClick() {
    /**
     * Concept from: https://stackoverflow.com/a/42401686
     * @type {NodeListOf<Element>}
     */
    let navLinks = document.querySelectorAll('.nav-item');
    let menuToggle = document.getElementById('navbarNav');
    let bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    navLinks.forEach((l) => {
      l.addEventListener('click', () => {
        bsCollapse.toggle();
      });
    });
  }

}
