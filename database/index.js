const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        database: 'a1401074',
        user: 'a1401074',
        password: 'kyHAi174e'
    }
});
module.exports = knex;