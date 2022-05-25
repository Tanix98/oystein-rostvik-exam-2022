const apiPageUrl = "https://www.tanix.one/wp-json/wp/v2/pages/106";

const apiPostsList = "https://www.tanix.one/wp-json/wp/v2/posts?_fields=id,title,_links,_embedded&_embed&page=1";

const blogPostThumbnail = document.querySelector(".blog-post-thumbnail");

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
        console.log(error)
        errorMessage.innerHTML = `<p>An error has occurred!</p>`;
    }
}

async function fetchBlogList() {
    try{
        const response = await fetch(apiPostsList);
        const data = await response.json();

        errorMessage.innerHTML = "";

        for(let i = 0; i < data.length; i++) {
            blogList.innerHTML += `<div class="blog-post"><a href="blogpage.html?id=${data[i].id}" aria-label="Blog post: ${data[i].title.rendered}"><img src="${data[i]._embedded['wp:featuredmedia']['0'].media_details.sizes.medium_large.source_url}" class="blog-post-thumbnail" alt="${data[i]._embedded['wp:featuredmedia']['0'].alt_text}"> <h2 class="blog-title">${data[i].title.rendered}</h2> <p class="blog-date">${data[i]._embedded['wp:featuredmedia']['0'].date}<p/></a></div>`;
        }
    }
    catch(error) {
        console.log(error)
        errorMessage.innerHTML = `<p>An error has occurred!</p>`;
    }
}

fetchPageTitle();

fetchBlogList();