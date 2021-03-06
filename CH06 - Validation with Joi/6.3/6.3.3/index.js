var Hapi = require('hapi');
var Joi = require('joi');

var server = new Hapi.Server();
server.connection({ port: 4000 });

var schema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required(),
    location: Joi.string().required(),
    dob: Joi.date().required()
};

server.route({
    method: 'GET',
    path: '/people/{id}',
    handler: function (request, reply) {

        var people = {
            1: {
                firstName: 'Xiang',
                lastName: 'Zheng',
                age: 48,
                location: 'Singapore',
                dob: '1967-03-02'
            },
            2: {
                firstName: 'Ioannis',
                lastName: 'Michelakakis',
                age: 'Middle-aged',
                location: 'Athens',
                dob: '1964-03-02'
            }
        };

        reply(people[request.params.id]);

    },
    config: {
        response: {
            schema: schema
        }
    }
});

server.start(function () {

    console.log('Started server');
});
