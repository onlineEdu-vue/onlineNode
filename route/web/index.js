const express=require('express');
const mysql=require('mysql');
const dbConfig=require('../db/dbConfig');
let db=mysql.createPool(dbConfig);

module.exports=function (){
  var router=express.Router();

  router.get('/home', (req, res)=>{
    db.query('SELECT * FROM courseDescription_table', (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        console.log(data);
        res.send(data).end();
      }
    });
  });
  router.get('/course', (req, res)=>{
    db.query('SELECT * FROM course_table', (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        console.log(data);
        res.send(data).end();
      }
    });
  });
  router.get('/coursecontent', (req, res)=>{
    db.query('SELECT * FROM coursecontent_table', (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        console.log(data);
        res.send(data[0]).end();
      }
    });
  });
  router.get('/message', (req, res)=>{
    db.query('SELECT * FROM msg_table', (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        console.log(data);
        res.send(data[0]).end();
      }
    });
  });
  router.use('/login',require('./login'));
  router.use('/regester',require('./regester'));
  router.use('/lear',require('./lear')());
  return router;
};


// 1.判断当前是那个用户登录
// 2.删除该用户的数据