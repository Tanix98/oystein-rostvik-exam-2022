const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const PageUrl = "https://www.tanix.one/wp-json/wp/v2/pages/" + id;

const pageTitle = document.querySelector(".page-title");

async function fetchPageHtml() {
    const response = await fetch(PageUrl);

    const json = await response.json();

    pageTitle.innerHTML = `<h1>${json.title.rendered}</h1>`;
}

fetchPageHtml();

console.log(PageUrl);