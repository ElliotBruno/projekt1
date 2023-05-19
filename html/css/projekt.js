// // Hämta referenser till knappen och div-elementet
// var button = document.getElementById('myButton');
// var div = document.getElementById('myDiv');


// // Skapa en eventhanterare för klickhändelsen
// function myFunction() {
//   // Ändra texten i div-elementet
//   div.textContent = 'Klickhändelse inträffade!';
//   // Ändra bakgrundsfärgen på div-elementet
//   div.style.backgroundColor = 'red';
// }


// // Lägg till eventhanteraren på knappen
// button.addEventListener('click', handleClick);

// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

// mapboxgl.accessToken = 'https://api.mapbox.com/styles/v1/{username}/{style_id}/static/{overlay}/{lon},{lat},{zoom},{bearing},{pitch}|{bbox}|{auto}/{width}x{height}{@2x}';

// function initMap() {
//   var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11', // Välj en stil som passar ditt behov
//     center: [18.1524, 59.4239], // Anpassa centrumkoordinaterna till Åva Gymnasiums plats
//     zoom: 15 // Justera zoomnivån efter dina preferenser
//   });

//   // Lägg till en markör för Åva Gymnasium
//   var marker = new mapboxgl.Marker()
//     .setLngLat([18.1524, 59.4239]) // Anpassa koordinaterna för markeringen
//     .addTo(map);
// }

// // Kör initMap() när sidan har laddats
// document.addEventListener('DOMContentLoaded', initMap);

// const map = new mapboxgl.Map({
//   container: 'map', // container ID
//   center: [-122.420679, 37.772537], // starting position [lng, lat]
//   zoom: 13, // starting zoom
//   style: 'mapbox://styles/mapbox/streets-v11', // style URL or style object
//   hash: true, // sync `center`, `zoom`, `pitch`, and `bearing` with URL
//   // Use `transformRequest` to modify requests that begin with `http://myHost`.
//   transformRequest: (url, resourceType) => {
//       if (resourceType === 'Source' && url.startsWith('http://myHost')) {
//           return {
//               url: url.replace('http', 'https'),
//               headers: {'my-custom-header': true},
//               credentials: 'include'  // Include cookies for cross-origin requests
//           };
//       }
//   }
// });


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

mapboxgl.accessToken = 'https://api.mapbox.com/styles/v1/{username}/{style_id}/static/{overlay}/{lon},{lat},{zoom},{bearing},{pitch}|{bbox}|{auto}/{width}x{height}{@2x}';
      
function initMap() {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // Väljer en stil som passar tillbehov
    center: [18.1524, 59.4239], // Anpassar centrumkoordinaterna till Ytterby plats
    zoom: 15 // Justerar zoomnivån
  });

  // Markör
  var marker = new mapboxgl.Marker()
    .setLngLat([18.1524, 59.4239]) // Koordinater
    .addTo(map);
}

// Kör initMap() när sidan har laddats
document.addEventListener('DOMContentLoaded', initMap);