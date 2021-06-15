// const mapboxToken = 'pk.eyJ1IjoiY2xlMSIsImEiOiJja3BwbjhmNm4wMmxkMnZwZmNzNXlvemNzIn0.nE7nBfZZ2_PWfhRwiJmpmQ'
//
// mapboxgl.accessToken = mapboxToken;
//
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/satellite-v9',
//     center: [-98.4936, 29.4243 ],
//     zoom: 20
// });
//
// let geocoder = setGeocoder();
// addGeocoderToMap(geocoder)
//
//
// function setGeocoder() {
//     return new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl,
//         marker: false
//     })
//
// }
//
// function addGeocoderToMap(geocoder) {
//     map.addControl(geocoder);
// }
//
//
// var favoriteRestArr = [{
//     address: '7507 Potranco Rd, San Antonio, TX 78251',
//     name: 'Tink-A-Tako',
//
//     address:
//     name:
//
//
// }];
//
// function placeMarkerAndPopup(info, token) {
//     geocode(info.address, token).then(function(coordinates) {
//         var popup = new mapboxgl.Popup()
//             .setHTML(info.name);
//         var marker = new mapboxgl.Marker()
//             .setLngLat(coordinates)
//             .addTo(map)
//             .setPopup(popup);
//         popup.addTo(map);
//     });
// }
//
// for (let info of favoriteRestArr){
//     placeMarkerAndPopup(info,mapboxToken);
// }



