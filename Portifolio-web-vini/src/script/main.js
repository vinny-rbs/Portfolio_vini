const menu_btn = document.querySelector("#menu-btn");
const nav_links = document.querySelector("#nav-links");
const menu_btn_icon = document.querySelector("i");

menu_btn.addEventListener("click", (e) => {
    nav_links.classList.toggle("open");

    const isOpen = nav_links.classList.contains("open");
    menu_btn_icon.setAttribute("class", isOpen? "ri-close-line": "ri-menu-line")
});

nav_links.addEventListener("click", (e) => {
    nav_links.classList.remove("open");

    const isOpen = nav_links.classList.contains("open");
    menu_btn_icon.setAttribute("class", isOpen? "ri-close-line": "ri-menu-line")
})
