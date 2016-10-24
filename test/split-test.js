'use strict';

let tape = require('tape'),
    textUtilities = require("../");


tape('split: Basic', function(test) {
  let words = textUtilities.splitWords('basic string split');

  test.equal(words.length, 3);
  test.end();
});    

tape('split: Punctuation', function(test) {
  let words = textUtilities.splitWords('basic? string. split!');

  test.equal(words.length, 3);
  test.end();
});    

tape('split: Junk', function(test) {
  let words = textUtilities.splitWords('odd     string.split');

  test.equal(words.length, 3);
  test.end();
});  

tape('split: URL', function(test) {
  let words = textUtilities.splitWords('Came down with a food bug, hence the erratic hour. Thought of you when reading this : https://www.fastcoexist.com/3064832/in-haiti-a-startup-is-building-100-renewable-grids-for-towns-with-no-power');

  test.equal(words.length, 35);
  test.end();
});  