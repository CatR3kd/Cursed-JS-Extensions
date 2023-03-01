// Spins random elements
// Written by ChatGPT!

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomDuration() {
  return Math.floor(Math.random() * 10) + 's';
}

function getRandomTimingFunction() {
  var timingFunctions = [    'linear',    'ease',    'ease-in',    'ease-out',    'ease-in-out'  ];
  return getRandomElement(timingFunctions);
}

function getRandomDelay() {
  return Math.floor(Math.random() * 10) + 's';
}

function getRandomDirection() {
  var directions = [    'normal',    'reverse',    'alternate',    'alternate-reverse'  ];
  return getRandomElement(directions);
}

function getRandomFillMode() {
  var fillModes = [    'none',    'forwards',    'backwards',    'both'  ];
  return getRandomElement(fillModes);
}

var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
  if(Math.random() > 0.9){
    var element = elements[i];
    var animationName = 'animation' + i;
    var duration = getRandomDuration();
    var timingFunction = getRandomTimingFunction();
    var delay = getRandomDelay();
    var direction = getRandomDirection();
    var fillMode = getRandomFillMode();
    var keyframes = '@keyframes ' + animationName + ' { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
    var animation = animationName + ' ' + duration + ' ' + timingFunction + ' ' + delay + ' ' + direction + ' ' + fillMode + ' infinite';
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = keyframes;
    document.getElementsByTagName('head')[0].appendChild(css);
    element.style.animation = animation;
  }
}
