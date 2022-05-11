const forms = document.querySelector(".contact-forms");

const nameForm = document.querySelector("#name")
const nameFormError = document.querySelector("#name-error")

const emailForm = document.querySelector("#email")
const emailFormError = document.querySelector("#email-error")

const subjectForm = document.querySelector("#subject")
const subjectFormError = document.querySelector("#subject-error")

const messageForm = document.querySelector("#message")
const messageFormError = document.querySelector("#message-error")

const pageErrorMessage = document.querySelector(".error-message");

function formValidation() {
    try{
        event.preventDefault();

        if(checkLength(nameForm.value, 4)) {
            nameFormError.style.display = "none";
        } else {
            nameFormError.style.display = "block";
        }

        if(validateEmail(emailForm.value)) {
            emailFormError.style.display = "none";
        } else {
            emailFormError.style.display = "block";
        }

        if(checkLength(subjectForm.value, 14)) {
            subjectFormError.style.display = "none";
        } else {
            subjectFormError.style.display = "block";
        }

        if(checkLength(messageForm.value, 24)) {
            messageFormError.style.display = "none";
        } else {
            messageFormError.style.display = "block";
        }

        pageErrorMessage.innerHTML = "";
    }
    catch(error) {
        errorMessage.innerHTML = `<p>An error has occurred!</p>`;
    }
}

forms.addEventListener("submit", formValidation);

function checkLength(value, len) {
    try{
        if(value.trim().length > len) {
            return true;
        }
        else{
            return false;
        }

        pageErrorMessage.innerHTML = "";
    }
    catch(error) {
        errorMessage.innerHTML = `<p>An error has occurred!</p>`;
    }
}

function validateEmail(email) {
    try{
        const regEx = /\S+@\S+\.\S+/;
        const patternMatches = regEx.test(email);
        return patternMatches;

        pageErrorMessage.innerHTML = "";
    }
    catch(error) {
        errorMessage.innerHTML = `<p>An error has occurred!</p>`;
    }
}