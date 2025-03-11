import { connectDB } from "../uti/sql.js";

export const getUsers = async (req, res) => {
    const sql = connectDB();
    const data = await sql.query("select * from users");
    res.json(data.rows);

};

export const getUser = async (req, res) => {
    const sql = connectDB();
    const query = {
        text:"select * from users where id = $1",
        values:[req.params.id],
    };
    const data = await sql.query(query);
    res.json(data.rows);

};

export const postUser = async (req, res) => {
    const {name, username, password} = req.body
    const sql = connectDB();
    const query = {
        text:"select * from users(name, username, password) values $1, $2, $3",
        values:[name, username, password],
    };
    const data = await sql.query(query);
    res.json(data.rows);
};



