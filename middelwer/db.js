
const express = require('express');
const mysql = require('mysql2');

var conn = mysql.createPool({
  host     : "srv475.hstgr.io",
  port     : process.env.DB_PORT || 3306,
  user     : "u230766957_laundrydb",
  password : "#Laundrydb@24",
  database : "u230766957_laundrydb",
  connectTimeout: 10000,
  ssl: {
      rejectUnauthorized: process.env.SSL_VERIFY !== 'false'
  }
});

// conn.connect((err) => {
//   if (err) {
//       console.error('Database connection error:', err);
//       return;
//   }
//   console.log('Connected to the database.');
// });


  const mySqlQury =(qry)=>{
    return new Promise((resolve, reject)=>{
        conn.query(qry, (err, row)=>{
            if (err) return reject(err);
            resolve(row)
        })
    }) 
  } 

  
  module.exports = {conn, mySqlQury}
