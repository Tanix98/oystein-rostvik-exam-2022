const pageUrl = "https://www.tanix.one/wp-json/wp/v2/pages/104";

const pageContainer = document.querySelector(".page-content");

async function fetchPageHtml() {
    const response = await fetch(pageUrl);
    const json = await response.json();

    pageContainer.innerHTML = `${json.content.rendered}`;    
}

fetchPageHtml();