var contextHelper = require('sp-context-helper');
var queryString = require('query-string');
var filter = require('../index');

var hostWebUrl = queryString.parse(location.search).SPHostUrl;
var contextWrapper = contextHelper(hostWebUrl, true);
var clientContext = contextWrapper.clientContext;
var web = contextWrapper.web;
var webs = web.get_webs();

clientContext.load(webs);
clientContext.executeQueryAsync(function (sender, args) {
    var title = 'App';

    var webCollection = filter(webs, function (current) {
        return current.get_title().indexOf(title) > -1;
    });

    if (webCollection.length > 0) {
        $('#message').html('Found ' + webCollection.length + ' webs that has ' + title + ' in title.');
    } else {
        $('#message').html('Found webs that has ' + title + ' in title.');
    }
}, function (sender, args) {
    alert(args.get_message());
});
