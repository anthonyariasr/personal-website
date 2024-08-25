    // Initialize the map
    var map = L.map('map').setView([9.933442, -84.086537], 9); // Example: New York City

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map
    L.marker([9.933442, -84.086537]).addTo(map)
        .bindPopup('Looking for opportunities in Costa Rica or remote!')
        .openPopup();