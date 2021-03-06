var Pages = require('./handlers/pages');
var Assets = require('./handlers/assets');
var Actions = require('./handlers/actions');

module.exports = [{
    method: 'GET',
    path: '/',
    handler: Pages.home
}, {
    method: 'GET',
    path: '/recipes/{id}',
    handler: Pages.viewRecipe
}, {
    method: 'GET',
    path: '/login',
    handler: Pages.login
}, {
    method: 'POST',
    path: '/login',
    config: {
        payload: {
            output: 'data'
        }
    },
    handler: Actions.login
}, {
    method: 'GET',
    path: '/{param*}',
    handler: Assets.servePublicDirectory
}];
