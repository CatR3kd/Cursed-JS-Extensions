// Adds random CSS to random elements
// Written by ChatGPT!
var elements = document.getElementsByTagName('*');
var properties = ['background-color', 'color', 'font-size', 'font-family', 'text-shadow', 'box-shadow', 'border-radius', 'border', 'padding', 'margin'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomValue(prop) {
  switch (prop) {
    case 'background-color':
    case 'color':
return '#' + Math.floor(Math.random() * 16777215).toString(16);
    case 'font-size':
return Math.floor(Math.random() * 100) + 'px';
    case 'font-family':
var families = [
  'Arial',
  'Helvetica',
  'Times New Roman',
  'Georgia',
  'Courier New',
  'Verdana'
];
return getRandomElement(families);
    case 'text-shadow':
    case 'box-shadow':
return '0 0 5px #' + Math.floor(Math.random() * 16777215).toString(16);
    case 'border-radius':
    case 'border':
    case 'padding':
    case 'margin':
return Math.floor(Math.random() * 50) + 'px';
  }
}

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  var prop = getRandomElement(properties);
  var value = getRandomValue(prop);
  element.style[prop] = value;
}
