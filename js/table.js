let http;
let imagenUrl;
let btn_search = document.getElementById("btn_search");
function obtenerData() {
    inicializar();
    var id = document.getElementById('ID').value;
    requestSend('https://rickandmortyapi.com/api/character/', id, action, 'GET');
}