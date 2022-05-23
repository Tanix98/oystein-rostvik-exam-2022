const blogpostImage = document.querySelector(".blogpost-image");
const imageModal = document.querySelector(".image-modal");
const imageModalImg = document.querySelector(".image-modal-img");
const modalBackground = document.querySelector(".modal-background");

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