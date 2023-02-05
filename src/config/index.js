const config = {
    production: {
        PORT: 1234,
        DB_URI: 'mongodb://127.0.0.1:27017/cubicle',
        SECRET: 'secretforproduction'
    },
    dev: {
        PORT: 5001,
        DB_URI: 'mongodb://127.0.0.1:27017/cubicle',
        SECRET: 'secretfordev'
    }
};

module.exports = config[process.env.node_env || 'dev'];