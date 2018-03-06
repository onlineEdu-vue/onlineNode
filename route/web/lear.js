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
      //console.log(1212);
      //console.log(usernameSQL.select,['123']);
      db.query(usernameSQL.select + username, (err, data)=>{
        if(err){
          console.error(err);
          res.status(500).send('database error').end();
        }else{
          if(data.length==0){
            res.status(400).send('no this admin').end();
          }else{
            console.log(data[0].graduate)
            let result = data[0].graduate - 0;
            if(result > 100) {
              //进行积分的扣除
              db.query(usernameSQL.updata,[username],(err,distable)=>{
                if(err){
                  console.error(err);
                  res.status(500).send('database error').end();
                }else{
                  //console.log(data);
                  res.send({code:0,message: `你现在有${result}积分，学习将要扣除100积分`,residue: result - 100}).end();
                }
              })
            } else {
              res.send({code:400,message: '积分不足'}).end();
            }
           
          }
        }
      });
    })
  });

  return router;
};
