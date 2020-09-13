
window.addEventListener('load', () => {
  let mapImage;

  const map = L.map('mapid', {
    crs: L.CRS.Simple,
    zoomControl: false,
  });

  var bounds = [[0, 0], [640, 640]];
  map.setMaxBounds(bounds)

  // var map1 = L.imageOverlay('./images/map1.png', bounds).addTo(map);
  // var map2 = L.imageOverlay('./images/map2.png', bounds).addTo(map);
  // map2.bringToBack()
  mapImage = setMapImage(map, 'story1', bounds)

  L.control.zoom({
    position: 'topright'
  }).addTo(map)

  map.fitBounds(bounds);


  const buttonStory1 = document.getElementById('button-story1')
  const buttonStory2 = document.getElementById('button-story2')

  buttonStory1.addEventListener('click', () => {
    removeMapImage(mapImage)
    mapImage = setMapImage(map, 'story1', bounds)
  })

  buttonStory2.addEventListener('click', () => {
    removeMapImage(mapImage)
    mapImage = setMapImage(map, 'story2', bounds)
  })

})

function removeMapImage(mapImage) {
  mapImage.remove()
}

function setMapImage(map, mapType, bounds) {
  // map.remove()

  const imagePath = mapType === 'story1'
    ? './images/map1.png'
    : './images/map2.png'

  const image = L.imageOverlay(imagePath, bounds).addTo(map);

  return image
}
