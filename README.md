# text-utilities

[![Circle CI](https://img.shields.io/circleci/project/redsift/text-utilities.svg?style=flat-square)](https://circleci.com/gh/redsift/text-utilities)
[![npm](https://img.shields.io/npm/v/@redsift/text-utilities.svg?style=flat-square)](https://www.npmjs.com/package/@redsift/text-utilities)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/redsift/text-utilities/master/LICENSE)

`text-utilities` tiny library wrapping text processing code snippets.

## Usage

### Browser

    <script src="//static.redsift.io/reusable/text-utilities/latest/text-utilities.umd-es2015.min.js">
    </script>
    <script>
        var words = text_utilities.html('split this   into.words');
        console.log(words);
    </script>

### ES6

    import { splitWords } from "@redsift/text-utilities";
    let words = splitWords('split this   into.words');
    ...

### Require

    var textUtilities = require("@redsift/text-utilities");
    var words = textUtilities.splitWords('split this   into.words');
    ...

Function|Signature|Returns|Description 
--------|---------|-------|-----------
splitWords|*string*|*Array*|Splits words based on common boundary characters 
trimEmailThreads|*string*|*string*|Clip text to exclude common reply styles

