import mysql from "mysql2";

let config =
    {
        host: process.env.SOLHOST,
        user: process.env.SOLADMIN,
        password: process.env.SOLPASS,
        database: process.env.SOLMAIN,
        port: 3306,
        ssl: {ca: process.env.SOLPEM}
    };

export const conn = new mysql.createConnection(config);
