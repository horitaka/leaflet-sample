window.addEventListener('load', () => {

  var map = L.map('mapid', {
    crs: L.CRS.Simple,
    zoomControl: false,
  });

  var bounds = [[0, 0], [640, 640]];
  map.setMaxBounds(bounds)

  var image = L.imageOverlay('./images/map-4348394_1280.png', bounds).addTo(map);

  L.control.zoom({
    position: 'topright'
  }).addTo(map)

  map.fitBounds(bounds);

})

