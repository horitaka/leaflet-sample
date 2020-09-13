window.addEventListener('load', () => {

  var map = L.map('mapid', {
    crs: L.CRS.Simple
  });

  var bounds = [[0, 0], [1000, 1000]];
  var image = L.imageOverlay('./images/map-4348394_1280.png', bounds).addTo(map);

  map.fitBounds(bounds);

})

