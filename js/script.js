let credenciales = {
    user: false,
    password: false

}


let http;

let intentos = 3;

let regExpMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var expresionRegular = /^\d{1,2}$/;

let clave = document.getElementById("password");
let mail = document.getElementById("mail");