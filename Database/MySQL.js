import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

con.connect(function(err) {
    if (err) throw err;
    console.log("MySQL Connected!");
});