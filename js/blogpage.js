const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const postUrl = "https://www.tanix.one/wp-json/wp/v2/posts/" + id + "?_embed";

const errorMessage = document.querySelector(".error-message");

const blogPost = document.querySelector(".blog");

async function fetchBlogList() {
    try{
        const response = await fetch(postUrl);
        const json = await response.json();

        errorMessage.innerHTML = "";

        console.log(json);

        blogPost.innerHTML = `${json.content.rendered}`;    
    }
    catch(error) {
        errorMessage.innerHTML = `<p>An error has occurred!</p>`;
    }
}

fetchBlogList();