// Fake location and IP grabber with fake ETA

navigator.geolocation.getCurrentPosition(function(pos){
  alert(`Location: lon${pos.coords.longitude} lat${pos.coords.latitude}`);
  alert(`IP: 800.852.150.722`);
  alert(`ETA: 13hr26m (From: Kolkata, IN)`)
});
