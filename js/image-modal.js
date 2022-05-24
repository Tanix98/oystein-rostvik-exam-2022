const blogpostImage = document.querySelector(".blogpost-image");
const imageModal = document.querySelector(".image-modal");
const imageModalImg = document.querySelector(".image-modal-img");
const modalBackground = document.querySelector(".modal-background");
const modalX = document.querySelector(".modal-x");

async function openModal() {
    imageModal.style.display = "flex";
    const response = await fetch(postUrl);
    const data = await response.json();
    imageModalImg.src = `${data._embedded['wp:featuredmedia']['0'].source_url}`;
}

blogpostImage.onclick = function() {
    openModal();
};

modalBackground.addEventListener("click", function(){
    imageModal.style.display = "none";
});

modalX.addEventListener("click", function(){
    imageModal.style.display = "none";
});

blogpostImage.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".blogpost-image").click()
    }
});

modalX.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".modal-x").click();
    }
});