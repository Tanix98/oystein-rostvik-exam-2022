const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const postUrl = "https://www.tanix.one/wp-json/wp/v2/posts/" + id + "?_embed";

const blogPost = document.querySelector(".blog");

const blogPostImage = document.querySelector(".blogpost-image");

const blogMetaDesc = document.querySelector('meta[name="description"]');

async function fetchBlogList() {
    try{
        const response = await fetch(postUrl);
        const data = await response.json();

        blogPostImage.src = `${data._embedded['wp:featuredmedia']['0'].source_url}`;

        blogPostImage.alt = `${data._embedded['wp:featuredmedia']['0'].alt_text}`;

        blogPost.innerHTML += `${data.content.rendered}`;

        blogMetaDesc.innerHTML += `${data.slug}`;
    }
    catch(error) {
        console.log(error)
    }
}

fetchBlogList();