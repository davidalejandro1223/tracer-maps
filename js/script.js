var coordLocalFB = [];
var coordLocalGoogle = [];
var coordLocalYoutube = [];
var coordEurFB = [];
var coordEurGoogle = [];
var coordEuraYoutube = [];


function initMaps() {
    cargarJSON();
    setTimeout(() => initMapsLocales(), 20);
    initMapsEuropa();
}

function initMapsLocales() {

    //mapa facebook local
    let mapaFacebook = new google.maps.Map(document.getElementById('mapa-fb-local'), {
        center: {
            lat: localJSON.facebook[0].latitud,
            lng: localJSON.facebook[0].longitud
        },
        zoom: 2,
        mapTypeId:"hybrid"
    });
    //marcadores mapa facebook local
    for (let i = 0; i < localJSON.facebook.length; i++) {
        coordLocalFB.push({ lat: localJSON.facebook[i].latitud, lng: localJSON.facebook[i].longitud})
        var latlng = new google.maps.LatLng(localJSON.facebook[i].latitud, localJSON.facebook[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaFacebook
        });   
    }
    //ruta hacia facebook desde local
    var rutaLocalFB = new google.maps.Polyline({
        path: coordLocalFB,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaLocalFB.setMap(mapaFacebook);


    //mapa google local
    let mapaGoogle = new google.maps.Map(document.getElementById('mapa-google-local'), {
        center: {
            lat: localJSON.google[0].latitud,
            lng: localJSON.google[0].longitud
        },
        zoom: 2,
        mapTypeId: "hybrid"
    });
    //marcadores mapa google local
    for (let i = 0; i < localJSON.google.length; i++) {
        coordLocalGoogle.push({ lat: localJSON.google[i].latitud, lng: localJSON.google[i].longitud })
        var latlng = new google.maps.LatLng(localJSON.google[i].latitud, localJSON.google[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaGoogle
        });
    }
    //ruta hacia google desde local
    var rutaLocalGoogle = new google.maps.Polyline({
        path: coordLocalGoogle,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaLocalGoogle.setMap(mapaGoogle);

    //mapa youtube local
    let mapaYoutube = new google.maps.Map(document.getElementById('mapa-youtube-local'), {
        center: {
            lat: localJSON.youtube[0].latitud,
            lng: localJSON.youtube[0].longitud
        },
        zoom: 2,
        mapTypeId: "hybrid"
    });
    //marcadores mapa youtube local
    for (let i = 0; i < localJSON.youtube.length; i++) {
        coordLocalYoutube.push({ lat: localJSON.youtube[i].latitud, lng: localJSON.youtube[i].longitud })
        var latlng = new google.maps.LatLng(localJSON.youtube[i].latitud, localJSON.youtube[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaYoutube
        });
    }
    //ruta hacia Youtube desde local
    var rutaLocalYoutube = new google.maps.Polyline({
        path: coordLocalYoutube,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaLocalYoutube.setMap(mapaYoutube);   
}

function initMapsEuropa(){
    let mapaFacebook = new google.maps.Map(document.getElementById('mapa-europa-facebook'), {
        center:{
            
        }
    });
}