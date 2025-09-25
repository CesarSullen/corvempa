const burgerMenu = document.querySelector(".burger-menu");
const navBar = document.querySelector(".nav-bar");

function toggleMenu() {
	navBar.classList.toggle("active");
	burgerMenu.classList.toggle("active");
}

document.querySelectorAll(".nav-bar a").forEach((link) => {
	link.addEventListener("click", () => {
		navBar.classList.remove("active");
		burgerMenu.classList.remove("active");
	});
});
