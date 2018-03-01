const express=require('express');
const mysql=require('mysql');
const dbConfig=require('../db/dbConfig');
const usernameSQL=require('../db/usernameSQL');
let db=mysql.createPool(dbConfig);

module.exports=function (req, res){
  var router=express.Router();
  router.post('/', (req, res)=>{
    let body = [];
    req.on('data',chunk => body.push(chunk));
    req.on('end',() => {
      body = JSON.parse(Buffer.concat(body).toString());
      req.body = body;

      let username = req.body.username;
      // 刚刚是哪里的问题？？
      console.log(1212);
      console.log(usernameSQL.select,['123']);
      db.query(usernameSQL.select + username, (err, data)=>{
        if(err){
          console.error(err);
          res.status(500).send('database error').end();
        }else{
          if(data.length==0){
            res.status(400).send('no this admin').end();
          }else{
           //进行积分的扣除
            db.query(usernameSQL.updata,[username],(err,data)=>{
              if(err){
                console.error(err);
                res.status(500).send('database error').end();
              }else{
                res.send(data).end();
              }
            })
          }
        }
      });
    })
  });

  return router;
};
