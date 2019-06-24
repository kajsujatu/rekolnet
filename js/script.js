// Initialize Animate On Scroll Library
AOS.init(); 

// Mobile menu

const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navLinks = document.querySelector(".nav-links");

function openMenu() {
	nav.style.transform = "translateY(0px)";
	hamburger.style.display = "none";
	close.style.display = "block";
}

function closeMenu() {
	nav.style.transform = "translateY(-500px)";
	hamburger.style.display = "block";
	close.style.display = "none";
}

hamburger.addEventListener('click', openMenu, false);
close.addEventListener('click', closeMenu, false);
navLinks.addEventListener('click', closeMenu, false);

