var coordLocalFB = [];
var coordLocalGoogle = [];
var coordLocalYoutube = [];
var coordEurFB = [];
var coordEurGoogle = [];
var coordEurYoutube = [];
var coordAfrFB = [];
var coordAfrGoogle = [];
var coordAfrYoutube = [];
var coordAsiaFB = [];
var coordAsiaGoogle = [];
var coordAsiaYoutube = [];
var coordNAFB = [];
var coordNAGoogle = [];
var coordNAYoutube = [];
var coordOCFB = [];
var coordOCGoogle = [];
var coordOCYoutube = [];
var coordSAFB = [];
var coordSAGoogle = [];
var coordSAYoutube = [];
var markersLocalFB = [];
var markersLocalGoogle = [];
var markersLocalYoutube = [];
var markersEurFB = [];
var markersEurGoogle = [];
var markersEurYoutube = [];
var markersAfrFB = [];
var markersAfrGoogle = [];
var markersAfrYoutube = [];
var markersAsiaFB = [];
var markersAsiaGoogle = [];
var markersAsiaYoutube = [];
var markersNAFB = [];
var markersNAGoogle = [];
var markersNAYoutube = [];
var markersOCFB = [];
var markersOCGoogle = [];
var markersOCYoutube = [];
var markersSAFB = [];
var markersSAGoogle = [];
var markersSAYoutube = [];
var infwindLocalFB = [];
var infwindLocalGoogle = [];
var infwindLocalYoutube = [];
var infwindEurFB = [];
var infwindEurGoogle = [];
var infwindEurYoutube = [];
var infwindAfrFB = [];
var infwindAfrGoogle = [];
var infwindAfrYoutube = [];
var infwindAsiaFB = [];
var infwindAsiaGoogle = [];
var infwindAsiaYoutube = [];
var infwindNAFB = [];
var infwindNAGoogle = [];
var infwindNAYoutube = [];
var infwindOCFB = [];
var infwindOCGoogle = [];
var infwindOCYoutube = [];
var infwindSAFB = [];
var infwindSAGoogle = [];
var infwindSAYoutube = [];

function initMaps() {
    cargarJSON();
    setTimeout(() => {
        initMapsLocales();
        initMapsEuropa();
        initMapsAfr();
        initMapsAsia();
        initMapsNA();
        initMapsOceania();
        initMapsSA();
    },50);
}

function initMapsLocales() {

    //mapa facebook local
    let mapaFacebook = new google.maps.Map(document.getElementById('mapa-fb-local'), {
        center: {
            lat: localJSON.facebook[0].latitud,
            lng: localJSON.facebook[0].longitud
        },
        zoom: 2,
        mapTypeId: "hybrid"
    });
    //marcadores mapa facebook local
    for (let i = 0; i < localJSON.facebook.length; i++) {
        coordLocalFB.push({
            lat: localJSON.facebook[i].latitud,
            lng: localJSON.facebook[i].longitud
        });
        var latlng = new google.maps.LatLng(localJSON.facebook[i].latitud, localJSON.facebook[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaFacebook,
            title: localJSON.facebook[i].ip
        });
        markersLocalFB.push(marker);
        var contenido = "direccion IP: " + localJSON.facebook[i].ip + "<br>" + "TM: " + localJSON.facebook[i].tm + "ms"
            + "<br>" + "webname: " + localJSON.facebook[i].webname + "<br>" + "AS: " + localJSON.facebook[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindLocalFB.push(infowindow);
        marker.addListener('click', function () {
            infwindLocalFB[i].open(mapaFacebook, markersLocalFB[i]);
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
        coordLocalGoogle.push({
            lat: localJSON.google[i].latitud,
            lng: localJSON.google[i].longitud
        })
        var latlng = new google.maps.LatLng(localJSON.google[i].latitud, localJSON.google[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaGoogle
        });
        markersLocalGoogle.push(marker);
        var contenido = "direccion IP: " + localJSON.google[i].ip + "<br>" + "TM: " + localJSON.google[i].tm + "ms"
            + "<br>" + "webname: " + localJSON.google[i].webname + "<br>" + "AS: " + localJSON.google[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindLocalGoogle.push(infowindow);
        marker.addListener('click', function () {
            infwindLocalGoogle[i].open(mapaGoogle, markersLocalGoogle[i]);
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
        coordLocalYoutube.push({
            lat: localJSON.youtube[i].latitud,
            lng: localJSON.youtube[i].longitud
        })
        var latlng = new google.maps.LatLng(localJSON.youtube[i].latitud, localJSON.youtube[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaYoutube
        });
        markersLocalYoutube.push(marker);
        var contenido = "direccion IP: " + localJSON.youtube[i].ip + "<br>" + "TM: " + localJSON.youtube[i].tm + "ms"
            + "<br>" + "webname: " + localJSON.youtube[i].webname + "<br>" + "AS: " + localJSON.youtube[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindLocalYoutube.push(infowindow);
        marker.addListener('click', function () {
            infwindLocalYoutube[i].open(mapaYoutube, markersLocalYoutube[i]);
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

function initMapsEuropa() {

    //mapa facebook europa
    let mapaFacebook = new google.maps.Map(document.getElementById('mapa-europa-facebook'), {
        center: {
            lng: servidorEU.facebook[0].longitud,
            lat: servidorEU.facebook[0].latitud
        },
        zoom: 2,
        mapTypeId: "hybrid"
    });
    //marcadores mapa facebook europa
    for (let i = 0; i < servidorEU.facebook.length; i++) {
        coordEurFB.push({
            lat: servidorEU.facebook[i].latitud,
            lng: servidorEU.facebook[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorEU.facebook[i].latitud, servidorEU.facebook[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaFacebook
        });
        markersEurFB.push(marker);
        var contenido = "direccion IP: " + servidorEU.facebook[i].ip + "<br>" + "TM: " + servidorEU.facebook[i].tm + "ms"
            + "<br>" + "webname: " + servidorEU.facebook[i].webname + "<br>" + "AS: " + servidorEU.facebook[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindEurFB.push(infowindow);
        marker.addListener('click', function () {
            infwindEurFB[i].open(mapaFacebook, markersEurFB[i]);
        });
    }
    //ruta hacia facebook desde europa
    var rutaEuropaFacebook = new google.maps.Polyline({
        path: coordEurFB,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaEuropaFacebook.setMap(mapaFacebook);

    //mapa google europa
    let mapaGoogle = new google.maps.Map(document.getElementById('mapa-europa-google'), {
        center: {
            lng: servidorEU.google[0].longitud,
            lat: servidorEU.google[0].latitud
        },
        zoom: 2,
        mapTypeId: "hybrid"
    });
    //marcadores mapa google europa
    for (let i = 0; i < servidorEU.google.length; i++) {
        coordEurGoogle.push({
            lat: servidorEU.google[i].latitud,
            lng: servidorEU.google[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorEU.google[i].latitud, servidorEU.google[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaGoogle
        });
        markersEurGoogle.push(marker);
        var contenido = "direccion IP: " + servidorEU.google[i].ip + "<br>" + "TM: " + servidorEU.google[i].tm + "ms"
            + "<br>" + "webname: " + servidorEU.google[i].webname + "<br>" + "AS: " + servidorEU.google[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindEurGoogle.push(infowindow);
        marker.addListener('click', function () {
            infwindEurGoogle[i].open(mapaGoogle, markersEurGoogle[i]);
        });
    }
    //ruta hacia google desde europa
    var rutaEuropaGoogle = new google.maps.Polyline({
        path: coordEurGoogle,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaEuropaGoogle.setMap(mapaGoogle);

    //mapa youtube europa
    let mapaYoutube = new google.maps.Map(document.getElementById('mapa-europa-youtube'), {
        center: {
            lng: servidorEU.youtube[0].longitud,
            lat: servidorEU.youtube[0].latitud
        },
        zoom: 2,
        mapTypeId: "hybrid"
    });
    //marcadores mapa youtube europa
    for (let i = 0; i < servidorEU.youtube.length; i++) {
        coordEurYoutube.push({
            lat: servidorEU.youtube[i].latitud,
            lng: servidorEU.youtube[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorEU.youtube[i].latitud, servidorEU.youtube[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaYoutube
        });
        markersEurYoutube.push(marker);
        var contenido = "direccion IP: " + servidorEU.youtube[i].ip + "<br>" + "TM: " + servidorEU.youtube[i].tm + "ms"
            + "<br>" + "webname: " + servidorEU.youtube[i].webname + "<br>" + "AS: " + servidorEU.youtube[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindEurYoutube.push(infowindow);
        marker.addListener('click', function () {
            infwindEurYoutube[i].open(mapaYoutube, markersEurYoutube[i]);
        });
    }
    //ruta hacia google desde europa
    var rutaEuropaYoutube = new google.maps.Polyline({
        path: coordEurYoutube,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaEuropaYoutube.setMap(mapaYoutube);
}

function initMapsAfr() {
    
    //mapa facebook africa
    let mapaFacebook = new google.maps.Map(document.getElementById('mapa-facebook-africa'),{
        center: {
            lat: servidorAF.facebook[0].latitud,
            lng: servidorAF.facebook[0].longitud
        },
        zoom: 2,
        mapTypeId: 'hybrid'
    });
    //marcadores mapa facebook africa
    for (let i = 0; i < servidorAF.facebook.length; i++) {
        coordAfrFB.push({
            lat: servidorAF.facebook[i].latitud,
            lng: servidorAF.facebook[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorAF.facebook[i].latitud, servidorAF.facebook[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaFacebook
        });
        markersAfrFB.push(marker);
        var contenido = "direccion IP: " + servidorAF.facebook[i].ip + "<br>" + "TM: " + servidorAF.facebook[i].tm + "ms"
            + "<br>" + "webname: " + servidorAF.facebook[i].webname + "<br>" + "AS: " + servidorAF.facebook[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindAfrFB.push(infowindow);
        marker.addListener('click', function () {
            infwindAfrFB[i].open(mapaFacebook, markersAfrFB[i]);
        });
    }
    //ruta hacia facebook desde africa
    var rutaAfricaFacebook = new google.maps.Polyline({
        path: coordAfrFB,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaAfricaFacebook.setMap(mapaFacebook);

    //mapa google africa
    let mapaGoogle = new google.maps.Map(document.getElementById('mapa-google-africa'), {
        center: {
            lat: servidorAF.google[0].latitud,
            lng: servidorAF.google[0].longitud
        },
        zoom: 2,
        mapTypeId: 'hybrid'
    });
    //marcadores mapa google africa
    for (let i = 0; i < servidorAF.google.length; i++) {
        coordAfrGoogle.push({
            lat: servidorAF.google[i].latitud,
            lng: servidorAF.google[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorAF.google[i].latitud, servidorAF.google[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaGoogle
        });
        markersAfrGoogle.push(marker);
        var contenido = "direccion IP: " + servidorAF.google[i].ip + "<br>" + "TM: " + servidorAF.google[i].tm + "ms"
            + "<br>" + "webname: " + servidorAF.google[i].webname + "<br>" + "AS: " + servidorAF.google[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindAfrGoogle.push(infowindow);
        marker.addListener('click', function () {
            infwindAfrGoogle[i].open(mapaGoogle, markersAfrGoogle[i]);
        });
    }
    //ruta hacia google desde africa
    var rutaAfricaGoogle = new google.maps.Polyline({
        path: coordAfrGoogle,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaAfricaGoogle.setMap(mapaGoogle);

    //mapa youtube africa
    let mapaYoutube = new google.maps.Map(document.getElementById('mapa-youtube-africa'), {
        center: {
            lng: servidorAF.youtube[0].longitud,
            lat: servidorAF.youtube[0].latitud
        },
        zoom: 2,
        mapTypeId: "hybrid"
    });
    //marcadores mapa youtube africa
    for (let i = 0; i < servidorAF.youtube.length; i++) {
        coordAfrYoutube.push({
            lat: servidorAF.youtube[i].latitud,
            lng: servidorAF.youtube[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorAF.youtube[i].latitud, servidorAF.youtube[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaYoutube
        });
        markersAfrYoutube.push(marker);
        var contenido = "direccion IP: " + servidorAF.youtube[i].ip + "<br>" + "TM: " + servidorAF.youtube[i].tm + "ms"
            + "<br>" + "webname: " + servidorAF.youtube[i].webname + "<br>" + "AS: " + servidorAF.youtube[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindAfrYoutube.push(infowindow);
        marker.addListener('click', function () {
            infwindAfrYoutube[i].open(mapaYoutube, markersAfrYoutube[i]);
        });
    }
    //ruta hacia google desde africa
    var rutaAfricaYoutube = new google.maps.Polyline({
        path: coordAfrYoutube,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaAfricaYoutube.setMap(mapaYoutube);
}

function initMapsAsia() {

    //mapa facebook asia
    let mapaFacebook = new google.maps.Map(document.getElementById('mapa-facebook-asia'), {
        center: {
            lat: servidorAS.facebook[0].latitud,
            lng: servidorAS.facebook[0].longitud
        },
        zoom: 2,
        mapTypeId: 'hybrid'
    });
    //marcadores mapa facebook asia
    for (let i = 0; i < servidorAS.facebook.length; i++) {
        coordAsiaFB.push({
            lat: servidorAS.facebook[i].latitud,
            lng: servidorAS.facebook[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorAS.facebook[i].latitud, servidorAS.facebook[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaFacebook
        });
        markersAsiaFB.push(marker);
        var contenido = "direccion IP: " + servidorAS.facebook[i].ip + "<br>" + "TM: " + servidorAS.facebook[i].tm + "ms"
            + "<br>" + "webname: " + servidorAS.facebook[i].webname + "<br>" + "AS: " + servidorAS.facebook[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindAsiaFB.push(infowindow);
        marker.addListener('click', function () {
            infwindAsiaFB[i].open(mapaFacebook, markersAsiaFB[i]);
        });
    }
    //ruta hacia facebook desde africa
    var rutaAsiaFacebook = new google.maps.Polyline({
        path: coordAsiaFB,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaAsiaFacebook.setMap(mapaFacebook);

    //mapa google asia
    let mapaGoogle = new google.maps.Map(document.getElementById('mapa-google-asia'), {
        center: {
            lat: servidorAS.google[0].latitud,
            lng: servidorAS.google[0].longitud
        },
        zoom: 2,
        mapTypeId: 'hybrid'
    });
    //marcadores mapa google asia
    for (let i = 0; i < servidorAS.google.length; i++) {
        coordAsiaGoogle.push({
            lat: servidorAS.google[i].latitud,
            lng: servidorAS.google[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorAS.google[i].latitud, servidorAS.google[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaGoogle
        });
        markersAsiaGoogle.push(marker);
        var contenido = "direccion IP: " + servidorAS.google[i].ip + "<br>" + "TM: " + servidorAS.google[i].tm + "ms"
            + "<br>" + "webname: " + servidorAS.google[i].webname + "<br>" + "AS: " + servidorAS.google[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindAsiaGoogle.push(infowindow);
        marker.addListener('click', function () {
            infwindAsiaGoogle[i].open(mapaGoogle, markersAsiaGoogle[i]);
        });
    }
    //ruta hacia google desde asia
    var rutaAsiaGoogle = new google.maps.Polyline({
        path: coordAsiaGoogle,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaAsiaGoogle.setMap(mapaGoogle);

    //mapa youtube asia
    let mapaYoutube = new google.maps.Map(document.getElementById('mapa-youtube-asia'), {
        center: {
            lng: servidorAS.youtube[0].longitud,
            lat: servidorAS.youtube[0].latitud
        },
        zoom: 2,
        mapTypeId: "hybrid"
    });
    //marcadores mapa youtube asia
    for (let i = 0; i < servidorAS.youtube.length; i++) {
        coordAsiaYoutube.push({
            lat: servidorAS.youtube[i].latitud,
            lng: servidorAS.youtube[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorAS.youtube[i].latitud, servidorAS.youtube[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaYoutube
        });
        markersAsiaYoutube.push(marker);
        var contenido = "direccion IP: " + servidorAS.youtube[i].ip + "<br>" + "TM: " + servidorAS.youtube[i].tm + "ms"
            + "<br>" + "webname: " + servidorAS.youtube[i].webname + "<br>" + "AS: " + servidorAS.youtube[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindAsiaYoutube.push(infowindow);
        marker.addListener('click', function () {
            infwindAsiaYoutube[i].open(mapaYoutube, markersAsiaYoutube[i]);
        });
    }
    //ruta hacia google desde asia
    var rutaAsiaYoutube = new google.maps.Polyline({
        path: coordAsiaYoutube,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaAsiaYoutube.setMap(mapaYoutube);
}

function initMapsNA() {

    //mapa facebook norte america
    let mapaFacebook = new google.maps.Map(document.getElementById('mapa-amNorte-facebook'), {
        center: {
            lat: servidorNA.facebook[0].latitud,
            lng: servidorNA.facebook[0].longitud
        },
        zoom: 2,
        mapTypeId: 'hybrid'
    });
    //marcadores mapa facebook norte america
    for (let i = 0; i < servidorNA.facebook.length; i++) {
        coordNAFB.push({
            lat: servidorNA.facebook[i].latitud,
            lng: servidorNA.facebook[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorNA.facebook[i].latitud, servidorNA.facebook[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaFacebook
        });
        markersNAFB.push(marker);
        var contenido = "direccion IP: " + servidorNA.facebook[i].ip + "<br>" + "TM: " + servidorNA.facebook[i].tm + "ms"
            + "<br>" + "webname: " + servidorNA.facebook[i].webname + "<br>" + "AS: " + servidorNA.facebook[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindNAFB.push(infowindow);
        marker.addListener('click', function () {
            infwindNAFB[i].open(mapaFacebook, markersNAFB[i]);
        });
    }
    //ruta hacia facebook desde norte america
    var rutaNAFB = new google.maps.Polyline({
        path: coordNAFB,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaNAFB.setMap(mapaFacebook);

    //mapa google norte america
    let mapaGoogle = new google.maps.Map(document.getElementById('mapa-amNorte-google'), {
        center: {
            lat: servidorNA.google[0].latitud,
            lng: servidorNA.google[0].longitud
        },
        zoom: 2,
        mapTypeId: 'hybrid'
    });
    //marcadores mapa google norte america
    for (let i = 0; i < servidorNA.google.length; i++) {
        coordNAGoogle.push({
            lat: servidorNA.google[i].latitud,
            lng: servidorNA.google[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorNA.google[i].latitud, servidorNA.google[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaGoogle
        });
        markersNAGoogle.push(marker);
        var contenido = "direccion IP: " + servidorNA.google[i].ip + "<br>" + "TM: " + servidorNA.google[i].tm + "ms"
            + "<br>" + "webname: " + servidorNA.google[i].webname + "<br>" + "AS: " + servidorNA.google[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindNAGoogle.push(infowindow);
        marker.addListener('click', function () {
            infwindNAGoogle[i].open(mapaGoogle, markersNAGoogle[i]);
        });
    }
    //ruta hacia google desde africa
    var rutaNAGoogle = new google.maps.Polyline({
        path: coordNAGoogle,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaNAGoogle.setMap(mapaGoogle);

    //mapa youtube norte america
    let mapaYoutube = new google.maps.Map(document.getElementById('mapa-amNorte-youtube'), {
        center: {
            lng: servidorNA.youtube[0].longitud,
            lat: servidorNA.youtube[0].latitud
        },
        zoom: 2,
        mapTypeId: "hybrid"
    });
    //marcadores mapa youtube norte america
    for (let i = 0; i < servidorNA.youtube.length; i++) {
        coordNAYoutube.push({
            lat: servidorNA.youtube[i].latitud,
            lng: servidorNA.youtube[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorNA.youtube[i].latitud, servidorNA.youtube[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaYoutube
        });
        markersNAYoutube.push(marker);
        var contenido = "direccion IP: " + servidorNA.youtube[i].ip + "<br>" + "TM: " + servidorNA.youtube[i].tm + "ms"
            + "<br>" + "webname: " + servidorNA.youtube[i].webname + "<br>" + "AS: " + servidorNA.youtube[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindNAYoutube.push(infowindow);
        marker.addListener('click', function () {
            infwindNAYoutube[i].open(mapaYoutube, markersNAYoutube[i]);
        });
    }
    //ruta hacia google desde norte america
    var rutaNAYoutube = new google.maps.Polyline({
        path: coordNAYoutube,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaNAYoutube.setMap(mapaYoutube);
}

function initMapsOceania() {

    //mapa facebook oceania
    let mapaFacebook = new google.maps.Map(document.getElementById('mapa-oceania-facebook'), {
        center: {
            lat: servidoraOC.facebook[0].latitud,
            lng: servidoraOC.facebook[0].longitud
        },
        zoom: 2,
        mapTypeId: 'hybrid'
    });
    //marcadores mapa facebook oceania
    for (let i = 0; i < servidoraOC.facebook.length; i++) {
        coordOCFB.push({
            lat: servidoraOC.facebook[i].latitud,
            lng: servidoraOC.facebook[i].longitud
        });
        var latlng = new google.maps.LatLng(servidoraOC.facebook[i].latitud, servidoraOC.facebook[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaFacebook
        });
        markersOCFB.push(marker);
        var contenido = "direccion IP: " + servidoraOC.facebook[i].ip + "<br>" + "TM: " + servidoraOC.facebook[i].tm + "ms"
            + "<br>" + "webname: " + servidoraOC.facebook[i].webname + "<br>" + "AS: " + servidoraOC.facebook[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindOCFB.push(infowindow);
        marker.addListener('click', function () {
            infwindOCFB[i].open(mapaFacebook, markersOCFB[i]);
        });
    }
    //ruta hacia facebook desde oceania
    var rutaOCFB = new google.maps.Polyline({
        path: coordOCFB,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaOCFB.setMap(mapaFacebook);

    //mapa google oceania
    let mapaGoogle = new google.maps.Map(document.getElementById('mapa-oceania-google'), {
        center: {
            lat: servidoraOC.google[0].latitud,
            lng: servidoraOC.google[0].longitud
        },
        zoom: 2,
        mapTypeId: 'hybrid'
    });
    //marcadores mapa google oceania
    for (let i = 0; i < servidoraOC.google.length; i++) {
        coordOCGoogle.push({
            lat: servidoraOC.google[i].latitud,
            lng: servidoraOC.google[i].longitud
        });
        var latlng = new google.maps.LatLng(servidoraOC.google[i].latitud, servidoraOC.google[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaGoogle
        });
        markersOCGoogle.push(marker);
        var contenido = "direccion IP: " + servidoraOC.google[i].ip + "<br>" + "TM: " + servidoraOC.google[i].tm + "ms"
            + "<br>" + "webname: " + servidoraOC.google[i].webname + "<br>" + "AS: " + servidoraOC.google[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindOCGoogle.push(infowindow);
        marker.addListener('click', function () {
            infwindOCGoogle[i].open(mapaGoogle, markersOCGoogle[i]);
        });
    }
    //ruta hacia google desde africa
    var rutaOCGoogle = new google.maps.Polyline({
        path: coordOCGoogle,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaOCGoogle.setMap(mapaGoogle);

    //mapa youtube oceania
    let mapaYoutube = new google.maps.Map(document.getElementById('mapa-oceania-youtube'), {
        center: {
            lng: servidoraOC.youtube[0].longitud,
            lat: servidoraOC.youtube[0].latitud
        },
        zoom: 2,
        mapTypeId: "hybrid"
    });
    //marcadores mapa youtube oceania
    for (let i = 0; i < servidoraOC.youtube.length; i++) {
        coordOCYoutube.push({
            lat: servidoraOC.youtube[i].latitud,
            lng: servidoraOC.youtube[i].longitud
        });
        var latlng = new google.maps.LatLng(servidoraOC.youtube[i].latitud, servidoraOC.youtube[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaYoutube
        });
        markersOCYoutube.push(marker);
        var contenido = "direccion IP: " + servidoraOC.youtube[i].ip + "<br>" + "TM: " + servidoraOC.youtube[i].tm + "ms"
            + "<br>" + "webname: " + servidoraOC.youtube[i].webname + "<br>" + "AS: " + servidoraOC.youtube[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindOCYoutube.push(infowindow);
        marker.addListener('click', function () {
            infwindOCYoutube[i].open(mapaYoutube, markersOCYoutube[i]);
        });
    }
    //ruta hacia google desde oceania
    var rutaOCYoutube = new google.maps.Polyline({
        path: coordOCYoutube,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaOCYoutube.setMap(mapaYoutube);
}

function initMapsSA() {

    //mapa facebook amSur
    let mapaFacebook = new google.maps.Map(document.getElementById('mapa-amSur-facebook'), {
        center: {
            lat: servidorSA.facebook[0].latitud,
            lng: servidorSA.facebook[0].longitud
        },
        zoom: 2,
        mapTypeId: 'hybrid'
    });
    //marcadores mapa facebok amSur
    for (let i = 0; i < servidorSA.facebook.length; i++) {
        coordSAFB.push({
            lat: servidorSA.facebook[i].latitud,
            lng: servidorSA.facebook[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorSA.facebook[i].latitud, servidorSA.facebook[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaFacebook
        });
        markersSAFB.push(marker);
        var contenido = "direccion IP: " + servidorSA.facebook[i].ip + "<br>" + "TM: " + servidorSA.facebook[i].tm + "ms"
            + "<br>" + "webname: " + servidorSA.facebook[i].webname + "<br>" + "AS: " + servidorSA.facebook[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindSAFB.push(infowindow);
        marker.addListener('click', function () {
            infwindSAFB[i].open(mapaFacebook, markersSAFB[i]);
        });
    }
    //ruta hacia facebook desde amSur
    var rutaSAFB = new google.maps.Polyline({
        path: coordSAFB,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaSAFB.setMap(mapaFacebook);

    //mapa googlamSur
    let mapaGoogle = new google.maps.Map(document.getElementById('mapa-amSur-google'), {
        center: {
            lat: servidorSA.google[0].latitud,
            lng: servidorSA.google[0].longitud
        },
        zoom: 2,
        mapTypeId: 'hybrid'
    });
    //marcadores mapa googleamSur
    for (let i = 0; i < servidorSA.google.length; i++) {
        coordSAGoogle.push({
            lat: servidorSA.google[i].latitud,
            lng: servidorSA.google[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorSA.google[i].latitud, servidorSA.google[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaGoogle
        });
        markersSAGoogle.push(marker);
        var contenido = "direccion IP: " + servidorSA.google[i].ip + "<br>" + "TM: " + servidorSA.google[i].tm + "ms"
            + "<br>" + "webname: " + servidorSA.google[i].webname + "<br>" + "AS: " + servidorSA.google[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindSAGoogle.push(infowindow);
        marker.addListener('click', function () {
            infwindSAGoogle[i].open(mapaGoogle, markersSAGoogle[i]);
        });
    }
    //ruta hacia google desde africa
    var rutaSAGoogle = new google.maps.Polyline({
        path: coordSAGoogle,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaSAGoogle.setMap(mapaGoogle);

    //mapa youtuamSur
    let mapaYoutube = new google.maps.Map(document.getElementById('mapa-amSur-youtube'), {
        center: {
            lng: servidorSA.youtube[0].longitud,
            lat: servidorSA.youtube[0].latitud
        },
        zoom: 2,
        mapTypeId: "hybrid"
    });
    //marcadores mapa youtubamSur
    for (let i = 0; i < servidorSA.youtube.length; i++) {
        coordSAYoutube.push({
            lat: servidorSA.youtube[i].latitud,
            lng: servidorSA.youtube[i].longitud
        });
        var latlng = new google.maps.LatLng(servidorSA.youtube[i].latitud, servidorSA.youtube[i].longitud);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapaYoutube
        });
        markersSAYoutube.push(marker);
        var contenido = "direccion IP: " + servidorSA.youtube[i].ip + "<br>" + "TM: " + servidorSA.youtube[i].tm + "ms"
            + "<br>" + "webname: " + servidorSA.youtube[i].webname + "<br>" + "AS: " + servidorSA.youtube[i].as;
        var infowindow = new google.maps.InfoWindow({
            content: contenido
        });
        infwindSAYoutube.push(infowindow);
        marker.addListener('click', function () {
            infwindSAYoutube[i].open(mapaYoutube, markersSAYoutube[i]);
        });
    }
    //ruta hacia google desdamSur
    var rutaSAYoutube = new google.maps.Polyline({
        path: coordSAYoutube,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    rutaSAYoutube.setMap(mapaYoutube);
}