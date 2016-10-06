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