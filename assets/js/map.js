/* Code attained by following tutorial from course */

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 53.5500,
            lng: 2.433
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 	51.555, lng: -0.108611 },
        { lat: 52.509167, lng: -1.884722},
        { lat: 	50.861822, lng: -0.083278 },
        { lat: 	53.789167, lng: -2.230278 },
        { lat: 	51.481667, lng: -0.191111 },
        { lat: 	51.398333, lng: -0.085556 },
        { lat: 	53.438889, lng: -2.966389 },
        { lat: 	51.475, lng: -0.221667 },
        { lat: 	53.777778, lng: -1.572222 },
        { lat: 	52.620278, lng: -1.142222 },
        { lat: 53.430759, lng: -2.961425 },
        { lat: 	53.482989, lng: -2.200292 },
        { lat: 	53.463056, lng: -2.291389 },
        { lat: 	54.975556, lng: -1.621667 },
        { lat: 	53.3700, lng: -1.4699 },
        { lat: 	50.905833, lng: -1.391111 },
        { lat: 	51.6043, lng: -0.0678 },
        { lat: 	52.509167, lng: -1.963889 },
        { lat: 	51.531944, lng: -0.039444 },
        { lat: 	52.5902, lng: -2.1304 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}