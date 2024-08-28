
const express = require('express');
const mysql = require('mysql2');

var conn = mysql.createPool({
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT || 3306,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    connectTimeout: 10000,
    ssl: {
        rejectUnauthorized: process.env.SSL_VERIFY !== 'false'
    }
});

conn.connect((err) => {
  if (err) {
      console.error('Database connection error:', err);
      return;
  }
  console.log('Connected to the database.');
});


  const mySqlQury =(qry)=>{
    return new Promise((resolve, reject)=>{
        conn.query(qry, (err, row)=>{
            if (err) return reject(err);
            resolve(row)
        })
    }) 
  } 

  
  module.exports = {conn, mySqlQury}