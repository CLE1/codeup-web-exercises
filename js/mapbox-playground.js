const mapboxToken = 'pk.eyJ1IjoiY2xlMSIsImEiOiJja3BwbjhmNm4wMmxkMnZwZmNzNXlvemNzIn0.nE7nBfZZ2_PWfhRwiJmpmQ'

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-97.1081, 32.7357],
    zoom: 12
});

let marker = setMarker([-97.1081, 32.7357]);

addMapEvent(marker);


let geocoder = setGeocoder();
addGeocoderToMap(geocoder)
addGeocoderEvent(geocoder)
setPopup("This is my popup!")

function setGeocoder() {
    return new mapBoxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })

}

function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}

function addGeocoderEvent(geocoder) {
    geocoder.on('result', function (event) {
        marker.setLngLat(event.result.geometry.coordinates)
    })

}

function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map);

}

function addMapEvent(marker) {
    map.on('click', function (event) {
        marker.setLngLat(event.lngLat)
            .addTo(map);
    })
}

function setPopup() {
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
        .addTo(map);

    marker.setPopup(popup);

    setPopup(event.result.resultPlaceName);
}