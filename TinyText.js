// Makes all your text tiny
// Written by ChatGPT!

const textElements = document.querySelectorAll('*:not(script):not(style):not(br):not(img):not(input):not(textarea):not(select):not(option)');

// Loop through each text element and set the font size to 8 pixels
for (let i = 0; i < textElements.length; i++) {
  const element = textElements[i];
  element.style.fontSize = '6px';
}
