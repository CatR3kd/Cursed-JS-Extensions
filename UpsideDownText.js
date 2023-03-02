// Flips all text upside down
// Written by ChatGPT!

const flipText = (text) => {
  const flipped = [];
  const characters = text.split('');
  const flipMap = {
    a: '\u0250',
    b: 'q',
    c: '\u0254',
    d: 'p',
    e: '\u01DD',
    f: '\u025F',
    g: 'b',
    h: '\u0265',
    i: '\u0131',
    j: '\u027E',
    k: '\u029E',
    l: '\u05DF',
    m: '\u026F',
    n: 'u',
    o: 'o',
    p: 'd',
    q: 'b',
    r: '\u0279',
    s: 's',
    t: '\u0287',
    u: 'n',
    v: '\u028C',
    w: '\u028D',
    x: 'x',
    y: '\u028E',
    z: 'z',
    '[': ']',
    ']': '[',
    '(': ')',
    ')': '(',
    '{': '}',
    '}': '{',
    '?': '\u00BF',
    '\u00BF': '?',
    '!': '\u00A1',
    '\u00A1': '!',
    '\'': ',',
    ',': '\'',
    '.': '\u02D9',
    '\u02D9': '.',
    '<': '>',
    '>': '<',
    '&': '\u214B',
    '\u214B': '&',
    '_': '\u203E',
    '\u203E': '_',
    ';': '\u061B',
    '\u061B': ';',
    '\r': '\n',
    '\n': '\r',
  };

  for (let i = characters.length - 1; i >= 0; i--) {
    const char = characters[i];
    const flippedChar = flipMap[char.toLowerCase()];
    flipped.push(flippedChar !== undefined ? flippedChar : char);
  }

  return flipped.join('');
};

const flipNode = (node) => {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = flipText(node.textContent);
  } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE' && node.nodeName !== 'TEXTAREA') {
    for (let i = 0; i < node.childNodes.length; i++) {
      flipNode(node.childNodes[i]);
    }
  }
};

flipNode(document.body);
