google.maps.event.addDomListener(window, "load", init);

function init() {
    var c = {
        zoom: 11,
        center: new google.maps.LatLng(40.67, -73.94),
        styles: [{
            featureType: "administrative.locality",
            elementType: "labels.icon",
            stylers: [{
                visibility: "on"
            }, {
                color: "#ff0000"
            }]
        }]
    };
    var b = document.getElementById("mapContainer");
    var a = new google.maps.Map(b, c);
    var d = new google.maps.Marker({
        position: new google.maps.LatLng(40.67, -73.94),
        map: a,
        icon: "images/contact/map-marker.png",
        title: "Snazzy!"
    })
};