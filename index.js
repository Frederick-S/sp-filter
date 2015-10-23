var each = require('sp-each');

module.exports = function (collection, truthTest, context) {
    var results = [];

    each(collection, function (current, index, collection) {
        if (truthTest.call(context, current, index, collection)) {
            results.push(current);
        }
    });

    return results;
};
