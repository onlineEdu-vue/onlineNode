const express=require('express');
const mysql=require('mysql');
const dbConfig=require('../db/dbConfig');
let db=mysql.createPool(dbConfig);
module.exports=function (req,res){
  let body = [];
    req.on('data',chunk => body.push(chunk));
    req.on('end',() => {
      body = JSON.parse(Buffer.concat(body).toString());
      req.body = body;
    let username=req.body.username;
    let password=req.body.password;
    db.query(`INSERT INTO user_table (username,password,graduate) VALUES ('${username}','${password}',1000)`, (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        //成功
        //console.log(data);
        //req.session['user_id']=data[0].ID;  用户登录以后保存用户的 session，可用来查看用户是否在登录状态
        res.send(data).end();
        }
    });
  });
  // return router;
};


