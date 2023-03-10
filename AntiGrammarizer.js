// Makes misspellings and grammar errors

const mispellings = [
  ['ad', 'add'],
  ['and', 'nad'],
  ['the', 'teh'],
  ['with', 'wit'],
  ['accept', 'except'],
  ['affect', 'effect'],
  ['ail', 'ale'],
  ['air', 'heir'],
  ['aisle', 'isle'],
  ['all', 'awl'],
  ['allowed', 'aloud'],
  ['ant', 'aunt'],
  ['ate', 'eight'],
  ['bare', 'bear'],
  ['base', 'bass'],
  ['be', 'bee'],
  ['beach', 'beech'],
  ['been', 'bin'],
  ['beer', 'bier'],
  ['berry', 'bury'],
  ['blew', 'blue'],
  ['boar', 'bore'],
  ['board', 'bored'],
  ['bold', 'bowled'],
  ['boos', 'booze'],
  ['bread', 'bred'],
  ['break', 'brake'],
  ['brews', 'bruise'],
  ['buy', 'by',],
  ['cell', 'sell'],
  ['cent', 'scent'],
  ['cereal', 'serial'],
  ['cheap', 'cheep'],
  ['check', 'cheque'],
  ['chews', 'choose'],
  ['chili', 'chilly'],
  ['chord', 'cord'],
  ['cite', 'sight'],
  ['clause', 'claws'],
  ['coarse', 'course'],
  ['complement', 'compliment'],
  ['council', 'counsel'],
  ['currant', 'current'],
  ['dear', 'deer'],
  ['due', 'dew'],
  ['die', 'dye'],
  ['discreet', 'discrete'],
  ['doe', 'dough'],
  ['done', 'dun'],
  ['draft', 'draught'],
  ['dual', 'duel'],
  ['dyeing', 'dying'],
  ['earn', 'urn'],
  ['ewe', 'you'],
  ['eye', 'i'],
  ['faint', 'feint'],
  ['fair', 'fare'],
  ['feet', 'feat'],
  ['fur', 'fir'],
  ['flair', 'flare'],
  ['flee', 'flea'],
  ['flew', 'flu'],
  ['flower', 'flour'],
  ['for', 'four'],
  ['formally', 'formerly'],
  ['forth', 'fourth'],
  ['foul', 'fowl'],
  ['freeze', 'frieze'],
  ['gamble', 'gambol'],
  ['gene', 'jean'],
  ['guilt', 'gilt'],
  ['gnu', 'new'],
  ['grate', 'great'],
  ['grisly', 'grizzly'],
  ['groan', 'grown'],
  ['grum', 'gruff'],
  ['guessed', 'guest'],
  ['hair', 'hare'],
  ['hall', 'haul'],
  ['hangar', 'hanger'],
  ['hay', 'hey'],
  ['heal', 'heel'],
  ['hear', 'here'],
  ['heard', 'herd'],
  ['hew', 'hue'],
  ['higher', 'hire'],
  ['hymn', 'hi'],
  ['hoarse', 'horse'],
  ['holey', 'holy'],
  ['hour', 'our'],
  ['idle', 'idol'],
];

const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li, b, i")

for(let element of elements){
  let newText = element.innerText.toLowerCase();
  for(let mispelling of mispellings){
    newText = newText.replaceAll(mispelling[0], mispelling[1]);
  }
  element.innerText = newText;
}
