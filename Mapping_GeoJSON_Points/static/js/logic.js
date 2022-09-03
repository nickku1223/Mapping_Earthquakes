// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
    onEachFeature: function (feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2> <hr> <h3> Airport name: " + feature.properties.name + "</h3>");
    }
  }).addTo(map);



// //=====================================================//
// //Skill Drill 13.5.2 part 1//
// L.geoJSON(sanFranAirport, {
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//   }
// }).addTo(map);


// // Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [30.1975, -97.6664],
//   [43.6777, -79.6248],
//   [40.6413, -73.7781]
// ];

// // Create a polyline using the line coordinates and make the line red.
// // L.polyline(line, {
// //   color: "yellow"
// // }).addTo(map);

// //=====================================================//
// //Skill Drill 13.4.3//
// L.polyline(line, {
//     color: "blue",
//     dashArray: 10,
//     opcity: 0.5
// }).addTo(map);
  
// // Get data from cities.js
// let cityData = cities

// // Loop through the cities array and create one marker for each city
// cityData.forEach(function(city){
//   console.log(city)
//   L.circleMarker(city.location,{
//     radius: city.population / 100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

//=====================================================//
// //Skill Drill 13.4.2//
// cityData.forEach(function(city){
//   console.log(city)
//   L.circleMarker(city.location,{
//     color: "orange",
//     weight: 4,
//     radius: (city.population - 200000) / 100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });



// //  Add a marker to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//   radius: 100
// }).addTo(map);

//=====================================================//
// //Skill Drill 13.4.1//
// L.circle([34.0522, -118.2437], {
//   radius: 300,
//   color: "black",
//   fillcolor: "#ffffa1"
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// To change the map's style, change the map id using the list of Mapbox ids below:
// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);