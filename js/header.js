const hamburgerButton = document.querySelector(".hamburger-button");

const mobileNav = document.querySelector(".mobile-nav");

const blogNav = document.querySelector(".page-nav-mobile");

hamburgerButton.addEventListener("click", function(){
    try {
        if (mobileNav.style.display === "flex") {
            mobileNav.style.display = "none";
            blogNav.style.display = "flex"
        } else {
            mobileNav.style.display = "flex";
            blogNav.style.display = "none"
        } 
    } catch (error) {
        console.log(error)
    }
});