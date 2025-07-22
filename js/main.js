function toggleMenu() {
	const burgerMenu = document.querySelector(".burger-menu");
	const navBar = document.querySelector(".nav-bar");

	navBar.classList.toggle("active");
	burgerMenu.classList.toggle("active");
}

document.querySelectorAll(".nav-bar a").forEach((link) => {
	link.addEventListener("click", () => {
		const navBar = document.querySelector(".nav-bar");
		const burgerMenu = document.querySelector(".burger-menu");

		navBar.classList.remove("active");
		burgerMenu.classList.remove("active");
	});
});
