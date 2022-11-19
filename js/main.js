(function () {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header_active");
        } else {
            header.classList.remove("header_active");
        }
    };
})();

// Burger handler
(function () {
    const BurgerIteam = document.querySelector(".burger");
    const menu = document.querySelector(".header__nav");
    menuCloseItem = document.querySelector(".header__nav-close");
    BurgerIteam.addEventListener("click", () => {
        menu.classList.add("header__nav_active");
    });
    menuCloseItem.addEventListener("click", () => {
        menu.classList.remove("header__nav_active");
    });
})();
