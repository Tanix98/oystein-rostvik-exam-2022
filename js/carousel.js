const apiPosts1 = "https://www.tanix.one/wp-json/wp/v2/posts?_fields=id,title,_links,_embedded&_embed&per_page=2";

const apiPosts2 = "https://www.tanix.one/wp-json/wp/v2/posts?_fields=id,title,_links,_embedded&_embed&per_page=2&offset=2";

const carouselContainer1 = document.querySelector("#slide-1");

const carouselContainer2 = document.querySelector("#slide-2");

async function fetchRecentBlogPosts1() {
    try{
        const response = await fetch(apiPosts1);

        const data = await response.json();

        for(let i = 0; i < data.length; i++) {
            carouselContainer1.innerHTML += `<div class="blog-post"><a href="pages/blogpage.html?id=${data[i].id}" aria-label="Blog post: ${data[i].title.rendered}"><img src="${data[i]._embedded['wp:featuredmedia']['0'].media_details.sizes.medium_large.source_url}" class="blog-post-thumbnail" alt="${data[i]._embedded['wp:featuredmedia']['0'].alt_text}"> <h3 class="blog-title">${data[i].title.rendered}</h3> <p class="blog-date">${data[i]._embedded['wp:featuredmedia']['0'].date}<p/></a></div>`;
        }
    }
    catch(error) {
        console.log(error)
    }
}

async function fetchRecentBlogPosts2() {
    try{
        const response = await fetch(apiPosts2);

        const data = await response.json();

        for(let i = 0; i < data.length; i++) {
            carouselContainer2.innerHTML += `<div class="blog-post"><a href="pages/blogpage.html?id=${data[i].id}" aria-label="Blog post: ${data[i].title.rendered}"><img src="${data[i]._embedded['wp:featuredmedia']['0'].media_details.sizes.medium_large.source_url}" class="blog-post-thumbnail" alt="${data[i]._embedded['wp:featuredmedia']['0'].alt_text}"> <h3 class="blog-title">${data[i].title.rendered}</h3> <p class="blog-date">${data[i]._embedded['wp:featuredmedia']['0'].date}<p/></a></div>`;
        }
    }
    catch(error) {
        console.log(error)
    }
}

fetchRecentBlogPosts1();

fetchRecentBlogPosts2();

const leftButton = document.getElementById("previous-slide-arrow");
const rightButton = document.getElementById("next-slide-arrow");

const slide1Button = document.getElementById("slide-1-button");
const slide2Button = document.getElementById("slide-2-button");

leftButton.addEventListener("click", function(){
    moveToNextSlide();
});
rightButton.addEventListener("click", function(){
    moveToPrevSlide();
});

slide1Button.addEventListener("click", function(){
    moveToNextSlide();
});
slide2Button.addEventListener("click", function(){
    moveToPrevSlide();
});

function moveToNextSlide() {
    carouselContainer1.classList.remove("invisible-slide")
    carouselContainer2.classList.add("invisible-slide")
    slide1Button.classList.add("active")
    slide2Button.classList.remove("active")
}

function moveToPrevSlide() {
    carouselContainer2.classList.remove("invisible-slide")
    carouselContainer1.classList.add("invisible-slide")
    slide2Button.classList.add("active")
    slide1Button.classList.remove("active")
}