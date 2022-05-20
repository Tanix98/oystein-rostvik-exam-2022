const modal = document.querySelector(".modal");

const image = document.querySelector(".main-image");

const modalImage = document.querySelector(".modal-image");

image.onclick = function(){
    modal.style.display = "block";
    modalImage.src = this.src;
    console.log("hiii");
};

const modalExit = document.querySelector(".close-modal")[0];

