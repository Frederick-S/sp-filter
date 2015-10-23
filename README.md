# sp-filter
Looks through SharePoint object collection and returns an array of objects that pass a truth test.

## Installation
```
npm install sp-filter --save
```

## Usage
```js
var filter = require('sp-filter');

var webs = find(webCollection, function (current, index, collection) {
    return current.get_title().indexOf('Title') > 0;
});
```

## License
MIT.
