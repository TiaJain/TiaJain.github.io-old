/* Width of each carousel image, in pixels */
let carouselWidth = 550; 

/* Part 2.1: Get the elements */
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

/* Part 2.2: Create variable to keep track of which image we're on */
let imageNum = 0;

/* Part 2.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
	// change imageNum
	imageNum++;
	checkControls();
	// how many pixels from the left should imageRow now be?
	let numPixels = -carouselWidth * imageNum;
	// change css for imageRow
	imageRow.style.left = numPixels + "px";
}

/* Part 2.4: Change the onclick property for the next button */
nextButton.onclick = showNextImage;

/* Part 2.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
	// change imageNum
	imageNum--;
	checkControls();
	// how many pixels from the left should imageRow now be?
	let numPixels = -carouselWidth * imageNum;
	// change css for imageRow
	imageRow.style.left = numPixels + "px";

}

/* Part 2.6: Change the onclick property for the prev button */
prevButton.onclick = showPrevImage;

/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image").length;

/* Part 2.7 */
function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == 0) {
		// What should happen if it's the first image?
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton.classList.remove("hidden");
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == totalImages - 1) {
		// What should happen it's the last image?
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?
	 	nextButton.classList.remove("hidden");
	}
}

window.onload = function() {
    var ai4sight = document.getElementById("ai4sight");
    ai4sight.onclick = goToSite;

    var gitlet = document.getElementById("gitlet");
    gitlet.onclick = goToGitHub;

    var scheme = document.getElementById("scheme");
    scheme.onclick = goToGitHub;
}

window.onload = function() {
    var email = document.getElementById("email");
    email.onclick = goToGmail;

    var linkedin = document.getElementById("linkedin");
    linkedin.onclick = goToLinkedin;

    var facebook = document.getElementById("facebook");
    facebook.onclick = goToFacebook;

    var instagram = document.getElementById("instagram");
    instagram.onclick = goToInstagram;
}

function goToGmail() {
    window.open("mailto:tiasjain@gmail.com");
}

function goToLinkedin() {
    window.open("https://www.linkedin.com/in/tiajain/");
}

function goToFacebook() {
    window.open("https://www.facebook.com/tiajain4/");
}

function goToInstagram() {
    window.open("https://www.instagram.com/tiajainn/");
}

function goToGitHub() {
    window.open("https://github.com/TiaJain?tab=projects");
}

function goToSite() {
    window.open("https://www.ai4sight.org/");
}