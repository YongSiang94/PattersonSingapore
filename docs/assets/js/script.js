var photoIndex = -1;

var modal = document.getElementById("myModal");

var img = document.querySelectorAll("img");
var modalImg = document.getElementById("img01");
var leftArrow = document.querySelector("#leftArrow");
var rightArrow = document.querySelector("#rightArrow");

leftArrow.addEventListener("click", prevImage);
function prevImage() {
	if (photoIndex != 0) {
		photoIndex = photoIndex - 1;
		modalImg.src = img.item(photoIndex).src;
	} else if (photoIndex == 0) {
		photoIndex = numGallery;
		modalImg.src = img.item(photoIndex).src;
	}
}
rightArrow.addEventListener("click", nextImage);

function nextImage() {
		if (photoIndex < numGallery) {
		photoIndex = photoIndex + 1;
	} else {
		photoIndex = 0;
	}
	modalImg.src = img.item(photoIndex).src;
}
for (var i = 0; i < img.length; i++) {
	img[i].addEventListener("click", function() {
		modal.style.display= 'block';
		modalImg.src=this.src;
	});
};

function updateIndex(num) {
	photoIndex = num;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
	modal.style.display = "none";
	photoIndex = -1;
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
	if ((e.keyCode == '37') && (modal.style.display == "block")) {
       prevImage();
    }
    else if ((e.keyCode == '39') && (modal.style.display == "block")) {
       nextImage();
    } else if ((e.keyCode == '27') && (modal.style.display == "block")) {
    	modal.style.display = "none";
    	photoIndex = -1;
    }

}