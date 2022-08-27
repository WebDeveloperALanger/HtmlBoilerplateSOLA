const body = document.querySelector("body")

const showNavMobile = () => {
    body.classList.add("nav-mobile-active");
}

const closeNavMobile = () => {
    body.classList.remove("nav-mobile-active")
}

const btnNavMobileClose = document.getElementById("nav-mobile-close");
const btnNavMobileOpen = document.getElementById("nav-mobile-open")

btnNavMobileClose.addEventListener("click", () => {
    closeNavMobile();
})

btnNavMobileOpen.addEventListener("click", () => {
    showNavMobile();
})


