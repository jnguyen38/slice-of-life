import {conn} from "../../lib/db";
import {insertAccount, insertParent, insertRelation, insertStudent} from "../../lib/sql";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Alias req.body
        const r = req.body;
        console.log(r);

        // Connect to database
        conn.connect(err => {
            if (err) {
                console.error("Connection refused. Error:")
                throw err;
            } else {
                console.log("Connection successful")
            }
        });

        // Add Parent(s) and retrieve inserted ids
        const parentIds = await Promise.all(insertParent(conn, r));

        // Add Student(s) and retrieve inserted ids
        const studentIds = await Promise.all(insertStudent(conn, r));

        // Add Account
        await insertAccount(conn, r);

        // Add Relation(s)
        insertRelation(conn, parentIds, studentIds, r.username)

        conn.end();

        res.status(200).json({
            message: "Successfully registered new user"
        })
    } else {
        res.status(404).json({
            message: "Invalid Request"
        })
    }
}