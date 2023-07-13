let credentials = {
    user: false,
    password: false

}


let http;

let Attempts = 3;

let regExpemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var regularPhrase = /^\d{1,2}$/;

let password = document.getElementById("password");
let email = document.getElementById("email");


function verifyUser() {

    let wrongEmail = document.getElementById("wrongEmail");


    if (regExpemail.test(email.value)) {

        console.log("valid email");
        credentials.user = true;
        wrongEmail.innerHTML = "";
    } else {
        wrongEmail.innerHTML = "*User must be an email*";
    }

}

function verifyPassword() {

    let wrongEmail = document.getElementById("wrongEmail");

    if (regularPhrase.test(password.value)) {

        console.log("Invalid password");
        credentials.password = true;
        wrongPassword.innerHTML = "";
    } else {
        wrongPassword.innerHTML = "*Password must contain one or two digits!*";
    }
}



function validateCredentials() {

    initialize();
    let id = document.getElementById('password').value;
    requestSend('https://jsonplaceholder.typicode.com/users/', id, action, 'GET');

}