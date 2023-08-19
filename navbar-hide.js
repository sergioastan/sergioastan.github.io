var prevScrollPos = window.scrollY;

window.onscroll = function () {
	var currentScrollPos = window.scrollY;

	if (prevScrollPos > currentScrollPos) {
		document.getElementById("custom-navbar").style.top = "0px";
	} else {
		// document.getElementById("custom-navbar-links").style.display = "none";
		document.getElementById("custom-navbar").style.top = "-100px";
	}
	prevScrollPos = currentScrollPos;
};

// window.onmousemove = function(e) {
//     mouseY = e.y;

//     if (mouseY <100) {
//         document.getElementById("custom-navbar").style.top = "0px";
//     } else {
//         document.getElementById("custom-navbar").style.top = "-70px";
//     }
// }
