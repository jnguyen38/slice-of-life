import {SQLnow} from "../components/Util";
import bcrypt from "bcryptjs";

export function insertParent(conn, r) {
    let insertIds = [];
    
    for (let p = 0; p < r.parents; p++) {
        const id = new Promise((resolve, reject) => {
            conn.query(`INSERT INTO parent (title, name, phone, email, address, city, state, zipcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [r[`title${p}`], r[`firstName${p}`] + " " + r[`lastName${p}`], r[`phone${p}`], r[`email${p}`], r[`street`], r[`city`], r[`state`], r[`zipCode`]],
                (err, results) => {
                    if (err) throw err;
                    console.log("Inserted", results.affectedRows, "row(s) in main.parent")
                    console.log("Inserted ID", results.insertId)
                    return resolve(results.insertId)
                });
        });
        insertIds.push(id)
    }
    
    return insertIds;
}

export function insertStudent(conn, r) {
    let insertIds = [];

    for (let s = 0; s < r.students; s++) {
        const id = new Promise((resolve, reject) => {
            conn.query(`INSERT INTO student (name, birthday, joined, enrolled, emergency, grade, school, allergies) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [r[`studentFirst${s}`] + " " + r[`studentLast${s}`], r[`birthday${s}`], SQLnow(), false, r[`phone0`], r[`studentGrade${s}`], r[`school${s}`], r[`allergy${s}`]],
                (err, results) => {
                    if (err) throw err;
                    console.log("Inserted", results.affectedRows, "row(s) in main.student")
                    console.log("Inserted ID", results.insertId)
                    return resolve(results.insertId);
                });
        });

        insertIds.push(id)
    }

    return insertIds;
}


export async function insertAccount(conn, r) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(r.password, salt);

    conn.query(`INSERT INTO account (username, email, password, salt, joined, active)
                VALUES (?, ?, ?, ?, ?, ?)`,
        [r[`username`], r[`accountEmail`], hash, salt, SQLnow(), true],
        (err, results) => {
            if (err) throw err;
            console.log("Inserted", results.affectedRows, "row(s) in main.account")
        });
}

export function insertRelation(conn, parentIds, studentIds, username) {
    for (let s = 0; s < studentIds.length; s++) {
        for (let p = 0; p < parentIds.length; p++) {
            conn.query(`INSERT INTO relation (student_id, parent_id, account_username) VALUES (?, ?, ?)`, [studentIds[s], parentIds[p], username],
                (err, results) => {
                    if (err) throw err;
                    console.log("Inserted", results.affectedRows, "row(s) in main.relation")
                }
            )
        }
    }
}