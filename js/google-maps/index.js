(function () {
  const mapElement = document.getElementById('main__map');

  const location = { lat: 35.6895, lng: 139.6917 };

  const map = new google.maps.Map(mapElement, {
    zoom: 14,
    center: location,
  });

  const marker = new google.maps.Marker({
   position: location,
   map: map
  });
})();