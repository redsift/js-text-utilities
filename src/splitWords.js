'use strict';

export default function splitWords(s) {
  return s.split(/[\t\r\n\u00A0 !\"#$%&()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]/).filter(t => t !== '');
}
