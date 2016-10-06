'use strict';

let tape = require('tape'),
    textUtilities = require("../");


tape('trim: Blank', function(test) {
  const value = "";
  let trimmed = textUtilities.trimEmailThreads(value);

  test.equal(trimmed, value);
  test.end();
});    

tape('trim: Basic', function(test) {
  const value = "Parents around next week-end! I'll create a Doodle!\r\n\r\nOn Wed, Oct 5, 2016 at 11:14 AM, Jim B \u003cjimbo@there.com\u003e wrote:\r\n\r\n\u003e Bit of a crunch for us this week.";
  const expected = "Parents around next week-end! I'll create a Doodle!\r\n\r\n";

  let trimmed = textUtilities.trimEmailThreads(value);

  test.equal(trimmed, expected);
  test.end();
});    

tape('trim: Leading whitespace', function(test) {
  const value = " \n  Parents around next week-end! I'll create a Doodle!\r\n\r\nOn Wed, Oct 5, 2016 at 11:14 AM, Jim B \u003cjimbo@there.com\u003e wrote:\r\n\r\n\u003e Bit of a crunch for us this week.";
  const expected = " \n  Parents around next week-end! I'll create a Doodle!\r\n\r\n";

  let trimmed = textUtilities.trimEmailThreads(value);

  test.equal(trimmed, expected);
  test.end();
});   


