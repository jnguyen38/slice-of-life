import {conn} from "../../lib/db";

export default function handler(req, res) {
    if (req.method === 'POST') {
        conn.connect(err => {
                if (err) {
                    console.error("Connection refused. Error:")
                    throw err;
                } else {
                    console.log("Connection successful")
                }
            });
        res.status(200).json({
            message: "Successfully registered new user"
        })
    } else {
        res.status(404).json({
            message: "Invalid Request"
        })
    }
}