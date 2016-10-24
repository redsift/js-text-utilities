'use strict';

let tape = require('tape'),
    textUtilities = require("../");


tape('replace: None', function(test) {
  const sample = 'Came down with a food bug, hence the erratic hour. Thought of you when reading this';
  let words = textUtilities.replaceURLsinText(sample, () => '');

  test.equal(words.length, sample.length);
  test.end();
});    

tape('replace: Basic', function(test) {
  let words = textUtilities.replaceURLsinText('Came down with a food bug, hence the erratic hour. Thought of you when reading this : https://www.fastcoexist.com/3064832/in-haiti-a-startup-is-building-100-renewable-grids-for-towns-with-no-power pretty cool', () => 'URL');

  test.equal(words, 'Came down with a food bug, hence the erratic hour. Thought of you when reading this : URL pretty cool');
  test.end();
});   
