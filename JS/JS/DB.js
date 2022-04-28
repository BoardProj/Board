
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
    
    connection.query(req.headers.query, function (err, results, fields) { // testQuery 실행
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