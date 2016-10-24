'use strict';

export default function replaceURLsinText(text, fn) {
  return text.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, fn);
}
