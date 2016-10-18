'use strict';

const PATTERNS = [
  // looks for a line that includes an email address between angle brackets
  /^.*[\d]{2,}.*[\n]?<[\n\s]{0,2}[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,10}[\n\s]{0,2}>.*:$[\s>]+/m, // https://regex101.com/r/midajo/1
  // looks for a line that starts with from: and includes an email address between angle brackets
  /^[>\s]*(?:from|to):.*[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,10}[\n\s]{0,2}>+/mi, // https://regex101.com/r/EBb7Y9/1
  // looks for a line that includes "----- Original Message" and related variants
  /^\s*---[-]*\s*\b(?:original|forward[\w]*|boundary)\b/mi 
];

export default function trimThreads(s) {

  for (let i=0; i<PATTERNS.length; i++) {
    let idx = s.search(PATTERNS[i]);
    if (idx !== -1) {
      return trimThreads(s.substr(0, idx));
    }
  }

  return s;
}
