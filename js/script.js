AOS.init(); 

function openMenu() {
	document.querySelector(".nav").style.transform = "translateY(0px)";
	document.querySelector(".hamburger").style.display = "none";
	document.querySelector(".close").style.display = "block";
}

function closeMenu() {
	document.querySelector(".nav").style.transform = "translateY(-500px)";
	document.querySelector(".close").style.display = "none";
	document.querySelector(".hamburger").style.display = "block";
}

document.querySelector(".hamburger").addEventListener('click', openMenu, false);
document.querySelector(".close").addEventListener('click', closeMenu, false);
document.querySelector(".nav-links").addEventListener('click', closeMenu, false);

