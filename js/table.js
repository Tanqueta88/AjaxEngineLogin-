let http;
let imagenUrl;
let btn_search = document.getElementById("btn_search");
function obtenerData() {
    inicializar();
    var id = document.getElementById('ID').value;
    requestSend('https://rickandmortyapi.com/api/character/', id, action, 'GET');
}

function inicializar() {
    if (window.XMLHttpRequest) {
        http = new XMLHttpRequest();
    } else {
        http = new ActiveXObject();
    }
}

function requestSend(url, id, funcionActuadora, metodo) {

    http.onreadystatechange = funcionActuadora;
    http.open(metodo, url + id, true);
    http.send();

}