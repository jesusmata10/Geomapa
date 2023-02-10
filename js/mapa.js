var map = L.map('map').setView([10.4501526, -66.9434945], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    /*attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/
}).addTo(map);

L.marker([10.4501526, -66.9434945]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

document.getElementById('select-location').addEventListener('change', function (e) {
    let coord = e.target.value.split(",");
    console.log(coord);

    map.flyTo(coord,14);

})
