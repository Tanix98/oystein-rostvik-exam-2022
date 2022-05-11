const pageUrl = "https://www.tanix.one/wp-json/wp/v2/pages/111";

const pageContainer = document.querySelector(".page-content");

const errorMessage = document.querySelector(".error-message");

async function fetchPageHtml() {
    try{
        const response = await fetch(pageUrl);
        const json = await response.json();

        errorMessage.innerHTML = "";

        pageContainer.innerHTML = `${json.content.rendered}`;
    }
    catch(error) {
        errorMessage.innerHTML = `<p>An error has occurred!</p>`;
    }   
}

fetchPageHtml();