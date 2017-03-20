'use strict';

let tape = require('tape'),
    fs = require('fs'),
    path = require('path'),
    textUtilities = require("../");


tape('trim: Blank', function(test) {
  const value = "";
  let trimmed = textUtilities.trimEmailThreads(value);

  test.equal(trimmed, value);
  test.end();
});

tape('trim: Basic', function(test) {
  const value = "Parents around next week-end! I'll create a Doodle!\r\n\r\nOn Wed, Oct 5, 2016 at 11:14 AM, Jim B \u003cjimbo@there.com\u003e wrote:\r\n\r\n\u003e Bit of a crunch for us this week.";
  const expected = "Parents around next week-end! I'll create a Doodle!";

  let trimmed = textUtilities.trimEmailThreads(value);

  test.equal(trimmed, expected);
  test.end();
});

tape('trim: Leading whitespace', function(test) {
  const value = " \n  Parents around next week-end! I'll create a Doodle!\r\n\r\nOn Wed, Oct 5, 2016 at 11:14 AM, Jim B \u003cjimbo@there.com\u003e wrote:\r\n\r\n\u003e Bit of a crunch for us this week.";
  const expected = " \n  Parents around next week-end! I'll create a Doodle!";

  let trimmed = textUtilities.trimEmailThreads(value);

  test.equal(trimmed, expected);
  test.end();
});


tape('trim: samples', function(test) {
  test.plan(1);

  const root = 'test/samples/threads/';
  let files = fs.readdirSync(root);

  let valid = 0, total = 0;
  files.forEach(function(f) {
    if (path.extname(f) !== '.txt') return;

    let expectedLines = parseInt(f);
    if (isNaN(expectedLines)) {
      console.warn(`Filename "${f}"" does not include the expected line count`);
      return;
    }

    let msg = fs.readFileSync(root + f, 'utf8');
    let trimmed = textUtilities.trimEmailThreads(msg);
    let trimmedLines = trimmed.split('\n').length;
    valid += trimmedLines === expectedLines ? 1 : 0;
    total += 1;

    if (trimmedLines !== expectedLines) {
      console.warn('Expected', expectedLines, 'but got', trimmedLines, 'lines:\n', trimmed);
    }
  });

  test.ok(100 * valid / total > 60, `Success rate of ${100 * valid / total}%.`);
});
