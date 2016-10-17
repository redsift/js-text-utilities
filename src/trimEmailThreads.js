'use strict';

export default function trimThreads(s) {
  // Regexp looks for a line that starts with > and includes an email address between angle brackets
  let idx = s.search(/^.+<[\n\s]{0,2}[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,10}[\n\s]{0,2}>.+:$\s*>/m);
  
  if (idx !== -1) {
    return trimThreads(s.substr(0, idx));
  }

  idx = s.search(/^---[-]*\s*\b(?:original|forward|boundary)\b/mi);
  if (idx !== -1) {
    return trimThreads(s.substr(0, idx));
  }  

  return s;
}
