const pageUrl = "https://www.tanix.one/wp-json/wp/v2/pages/104";

const pageContainer = document.querySelector(".page-content");

async function fetchPageHtml() {
    try{
        const response = await fetch(pageUrl);
        const data = await response.json();

        pageContainer.innerHTML = `${data.content.rendered}`;
    }
    catch(error) {
        console.log(error)
    }
}

fetchPageHtml();