var localJSON;
var servidorAF;
var servidorAS;
var servidorUS;
var servidorEU;
var servidoraOC;
var servidorSurAm;

function loadJSON(callback, ruta) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', ruta, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


function cargarJSON() {
    loadJSON(function (response) {
        localJSON = JSON.parse(response);
    }, 'Servidores/local.json');
    loadJSON(function (response) {
        servidorAF = JSON.parse(response);
    }, 'Servidores/africa.json');
    loadJSON(function (response) {
        servidorAS = JSON.parse(response);
    }, 'Servidores/asia.json');
    loadJSON(function (response) {
        servidorUS = JSON.parse(response);
    }, 'Servidores/US.json');
    loadJSON(function (response) {
        servidoraOC = JSON.parse(response);
    }, 'Servidores/oceania.json');
    loadJSON(function (response) {
        servidorEU = JSON.parse(response);
    }, 'Servidores/europa.json');
    loadJSON(function (response) {
        servidorSurAm = JSON.parse(response);
    }, 'Servidores/suramerica.json');
}