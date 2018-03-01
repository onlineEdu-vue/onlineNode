const express=require('express');
const mysql=require('mysql');
const dbConfig=require('../db/dbConfig');
let db=mysql.createPool(dbConfig);
module.exports=function (req, res){
  // let router=express.Router();
  // router.post('/login', (req, res)=>{
    let body = [];
    req.on('data',chunk => body.push(chunk));
    req.on('end',() => {
      body = JSON.parse(Buffer.concat(body).toString());
      req.body = body;
      let username = req.body.username;
      let password = req.body.password
      db.query(`SELECT * FROM user_table WHERE username='${username}'`, (err, data)=>{
        if(err){
          res.status(500).send('database error').end();
        }else{
          if(data.length==0){
            res.status(400).send('no this user').end();
          }else{
            if(data[0].password==password){
              //成功
              req.session['user_id']=data[0].ID;
              res.send(data).end();
            }else{
              res.status(400).send('this password is incorrect').end();
            }
          }
        }
      });
    })
  // })
  // return router;  
  
};