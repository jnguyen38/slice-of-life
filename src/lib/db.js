import mysql from "mysql2";
import fs from "fs";

let config =
    {
        host: 'slice-of-life-db.mysql.database.azure.com',
        user: 'soladmin',
        password: process.env.SOLPASS,
        database: 'main',
        port: 3306,
        ssl: {ca: process.env.SOLPEM}
    };

export const conn = new mysql.createConnection(config);