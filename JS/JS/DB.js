
const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const { Console } = require('console');

const app = express();
const port = 3000;

let corsOptions = {
    origin: 'http://127.0.0.1:5500',
    credentials: true
}

app.use(cors(corsOptions));

app.get('/list', (req, res) => {
    const conn = {
        host : '101.101.211.124',
        port : '3306',
        user: 'root',
        password : 'zoavjtm7#',
        database : 'Board'
    }
    var connection = mysql.createConnection(conn); // DB 커넥션 생성
    connection.connect();   // DB 접속
    
    let statement = "SELECT * FROM user_info";
        
    connection.query(statement, function (err, results, fields) { // testQuery 실행
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results);
    });
    
    connection.end(); // DB 접속 종료
    
});

app.get('/test', (req, res) => {
    const conn = {
        host : '101.101.211.124',
        port : '3306',
        user: 'root',
        password : 'zoavjtm7#',
        database : 'Board'
    }
    var connection = mysql.createConnection(conn); // DB 커넥션 생성
    connection.connect();   // DB 접속
    
    let statement = "SELECT * FROM user_info WHERE user_key = " + req.headers.user_key;
        
    connection.query(statement, function (err, results, fields) { // testQuery 실행
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results);
    });
    
    connection.end(); // DB 접속 종료
    
});

app.put('/test', (req, res) => {
    const conn = {
        host : '101.101.211.124',
        port : '3306',
        user: 'root',
        password : 'zoavjtm7#',
        database : 'Board'
    }
    var connection = mysql.createConnection(conn); // DB 커넥션 생성
    connection.connect();   // DB 접속
    
    let statement = "update user_info set ";
    statement += req.headers.division + "='" + req.headers.value + "' ";
    statement += "where user_key=" + req.headers.user_key;
    
    console.log(statement);
    connection.query(statement, function (err, results, fields) { // testQuery 실행
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results);
    });
    
    connection.end(); // DB 접속 종료
    
});

app.post('/test', (req, res) => {
    const conn = {
        host : '101.101.211.124',
        port : '3306',
        user: 'root',
        password : 'zoavjtm7#',
        database : 'Board'
    }
    var connection = mysql.createConnection(conn); // DB 커넥션 생성
    connection.connect();   // DB 접속
    
    let data = JSON.parse(req.headers.data);
    let statement = "insert into user_info(user_id, user_password, user_name, user_email, user_status) values(";
    statement += data.id + ", " + data.pw + ", " + data.name + ", '" + data.email + "', 0);";
    
    console.log(statement);
    connection.query(statement, function (err, results, fields) { // testQuery 실행
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results);
    });
    
    connection.end(); // DB 접속 종료
    
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});