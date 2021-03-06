var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 4000 });

server.bind({
    apiBaseUrl: 'http://localhost:4000/api',
    webBaseUrl: 'http://localhost:4000'
});

server.register([
    require('dindin-api'),
    require('inert'),
    require('vision')
], function (err) {

    if (err) {
        throw err;
    }

    server.views({
        engines: {
            hbs: require('handlebars')
        },
        relativeTo: __dirname,
        path: './views',
        isCached: false
    });

    server.route(require('./routes'));

    server.start(function () {

        console.log('Started server at', server.info.uri);
    });
});
