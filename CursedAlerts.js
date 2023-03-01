// Creates random, worrysome alerts when anything on the site is clicked

const alerts = ['Warning: May damage your device. Proceed with caution.', 'Uh oh, looks like you\'re trying to tamper with our servers! You have been automatically reported to the NCCIC.', 'You do not have permission to use this feature.', 'This feature requires a paid subscription!', 'Are you sure?'];

for(let element of document.getElementsByTagName("*")){
  element.addEventListener('click', function(event){
    if(event.target == element){
      if(Math.random() > 0.75){
        event.preventDefault();
        alert(alerts[Math.floor(Math.random() * alerts.length)]);
      }
    }
  });
}
