const apiPostsList = "https://www.tanix.one/wp-json/wp/v2/posts?page=2";

const apiPageUrl = "https://www.tanix.one/wp-json/wp/v2/pages/106";

const titleContainer = document.querySelector(".page-title");

const blogList = document.querySelector(".blog-list");

const errorMessage = document.querySelector(".error-message");

async function fetchPageTitle() {
    const response = await fetch(apiPageUrl);
    const json = await response.json();

    titleContainer.innerHTML = `<h1>${json.title.rendered}</h1>`;    
}

async function fetchBlogList() {
    const response = await fetch(apiPostsList);

    const json = await response.json();

    for(let i = 0; i < apiPostsList.length; i++) {
        blogList.innerHTML += `<div class="blog-post"><a href="blogpage.html?id=${json[i].id}"><img src="${json[i].featured_media_src_url}" class="blog-post-thumbnail"> <h2 class="blog-title">${json[i].title.rendered}</h2> <p class="blog-date">${json[i].date}<p/></a></div>`;
    }
}

fetchPageTitle()

fetchBlogList();