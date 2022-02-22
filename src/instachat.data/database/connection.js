const Pool = require('pg-pool');

const db = new Pool({
    database: '',
    user: '',
    password: '',
    port: 5432,
    max: 20,
    maxUses: 7500
});

module.exports = db