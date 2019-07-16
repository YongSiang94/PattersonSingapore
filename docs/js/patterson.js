// Toggle sidebar for menu contents
var toggle = document.querySelector(".toggle-btn");
var closeBtn = document.querySelector("#closeBtn");
toggle.addEventListener("click", function() {
	document.querySelector("#sidebar").style.left = "0";
	toggle.style.display = "none";
	document.querySelector(".lineCross").classList.toggle("remove");
})
closeBtn.addEventListener("click", function() {
	document.querySelector("#sidebar").style.left = '-400px';
	document.querySelector(".lineCross").classList.toggle("remove");
	toggle.style.display = "inline-block";
})
// window.onscroll = function () {
// 	var nav = document.querySelector(".lineCross");
// 	var sticky = nav.offsetTop;

// 	if (window.pageYOffset >= sticky) {
// 		nav.classList.add("sticky");
// 		nav.style.background = "rgba(0, 0, 0, 0.5)";
// 		document.querySelector("#firstIntro").style.paddingTop = "230px";
// 	}
// 	if (window.pageYOffset == 0) {
// 		nav.style.background="rgba(0,0,0,0.9)";
// 		nav.classList.remove("sticky");
// 		document.querySelector("#firstIntro").style.paddingTop = "150px";
// 	}
// }

var envelope = document.querySelector(".fa-envelope");
var phone = document.querySelector(".fa-phone");
var infoText = document.querySelector("#infoText");
envelope.addEventListener("mouseenter", function() {
	infoText.innerHTML = "chlow@pattersonsingapore.com"
})

phone.addEventListener("mouseenter", function() {
	infoText.innerHTML = "+65 9634 0303"
})