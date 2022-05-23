const apiPostsList = "https://www.tanix.one/wp-json/wp/v2/posts?_embed?page=1";

const apiPageUrl = "https://www.tanix.one/wp-json/wp/v2/pages/106";

const titleContainer = document.querySelector(".page-title");

const blogList = document.querySelector(".blog-list");

const errorMessage = document.querySelector(".error-message");

async function fetchPageTitle() {
    try{
        const response = await fetch(apiPageUrl);
        const data = await response.json();

        errorMessage.innerHTML = "";

        titleContainer.innerHTML = `<h1>${data.title.rendered}</h1>`;
        }
    catch(error) {
        errorMessage.innerHTML = `<p>An error has occurred!</p>`;
    }
}

async function fetchBlogList() {
    try{
        const response = await fetch(apiPostsList);

        const data = await response.json();

        errorMessage.innerHTML = "";

        for(let i = 0; i < data.length; i++) {
            blogList.innerHTML += `<div class="blog-post"><a href="blogpage.html?id=${data[i].id}"><img src="${data[i].featured_media_src_url}" class="blog-post-thumbnail"> <h2 class="blog-title">${data[i].title.rendered}</h2> <p class="blog-date">${data[i].date}<p/></a></div>`;
        }
    }
    catch(error) {
        errorMessage.innerHTML = `<p>An error has occurred!</p>`;
    }
}

fetchPageTitle();

fetchBlogList();