/* General functions */
/* variables ham button*/

const ham = document.querySelector(".ham");
const navMenu = document.querySelector(".nav__ul");

ham.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});