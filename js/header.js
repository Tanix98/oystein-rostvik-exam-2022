const hamburgerButton = document.querySelector(".hamburger-button");

const mobileNav = document.querySelector(".mobile-nav");

hamburgerButton.addEventListener("click", function(){
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
    console.log("button works");
});