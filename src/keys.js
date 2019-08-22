module.exports = {

    database: {
        connectionLimit: 10,
        host: process.env.MYSQL_PORT_3306_TCP_ADDR,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }

};
