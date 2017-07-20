# sp-filter

[![Greenkeeper badge](https://badges.greenkeeper.io/Frederick-S/sp-filter.svg)](https://greenkeeper.io/)
Looks through SharePoint object collection and returns an array of objects that pass a truth test.

## Installation
```
npm install sp-filter --save
```

## Usage
```js
var filter = require('sp-filter');

var webs = filter(webCollection, function (current, index, collection) {
    return current.get_title().indexOf('Title') > 0;
});
```

## License
MIT.
