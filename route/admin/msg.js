const express=require('express');
const mysql=require('mysql');
const dbConfig=require('../db/dbConfig');
const msgSQL=require('../db/msgSQL');
let db=mysql.createPool(dbConfig);

module.exports=function (){
  var router=express.Router();
  router.get('/', (req, res)=>{
    switch(req.query.act){
      case 'mod':
        db.query(msgSQL.select1,[req.query.id],(err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else if(data.length==0){
            res.status(404).send('data not found').end();
          }else{
            db.query('SELECT * FROM msg_table', (err, msg)=>{
              if(err){
                console.error(err);
                res.status(500).send('database error').end();
              }else{
                res.render('admin/msg.ejs', {msg, mod_data: data[0]});
              }
            });
          }
        });
        break;
      case 'del':
        db.query(msgSQL.del,[req.query.id], (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else{
            res.redirect('/admin/message');
          }
        });
        break;
      default:
        db.query(msgSQL.select, (err, msg)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else{
            res.render('admin/msg.ejs', {msg});
          }
        });
        break;
    }
  });
  router.post('/', (req, res)=>{
    var message=req.body.message;
    var message1=req.body.message1;
    var message2=req.body.message2;
    var message3=req.body.message3;
    var message4=req.body.message4;
    var message5=req.body.message5;
    var message6=req.body.message6;
    var message7=req.body.message7;
    var message8=req.body.message8;
    var message9=req.body.message9;
    var message10=req.body.message10;
    var product=req.body.product;
    var product1=req.body.product1;
    var product2=req.body.product2;
    var product3=req.body.product3;
    var product4=req.body.product4;
    var product5=req.body.product5;
    var product6=req.body.product6;
    var product7=req.body.product7;
    var product8=req.body.product8;
    var product9=req.body.product9;
    var product10=req.body.product10;
    var finance=req.body.finance;
    var finance1=req.body.finance1;
    var finance2=req.body.finance2;
    var finance3=req.body.finance3;
    var finance4=req.body.finance4;
    var finance5=req.body.finance5;
    var finance6=req.body.finance6;
    var finance7=req.body.finance7;
    var finance8=req.body.finance8;
    var finance9=req.body.finance9;
    var finance10=req.body.finance10;
      if(req.body.mod_id){    //修改
        db.query(msgSQL.update,[req.body.message,req.body.message1,req.body.message2,
          req.body.message3,req.body.message4,req.body.message5,req.body.message6,
          req.body.message7,req.body.message8,req.body.message9,req.body.message10,
          req.body.product,req.body.product1,req.body.product2,req.body.product3,
          req.body.product4,req.body.product5,req.body.product6,req.body.product7,
          req.body.product8,req.body.product9,req.body.product10,req.body.finance,
          req.body.finance1,req.body.finance2,req.body.finance3,req.body.finance4,
          req.body.finance5,req.body.finance6,req.body.finance7,req.body.finance8,
          req.body.finance9,req.body.finance10,req.body.mod_id],
          (err, data)=>{
            if(err){
              console.error(err);
              res.status(500).send('database error').end();
            }else{
              res.redirect('/admin/message');
            }
          }
        );
      }else{                  //添加
        db.query(msgSQL.insert,[message,message1,message2,message3,message4,message5,message6,
          message7,message8,message9,message10,product,product1,product2,product3,product4,product5,
          product6,product7,product8,product9,product10,finance,finance1,finance2,finance3,finance4,
          finance5,finance6,finance7,finance8,finance9,finance10],(err, data)=>{
          if(err){
            console.log(90);
            console.error(err);
            res.status(500).send('database error').end();
          }else{
            res.redirect('/admin/message');
          }
        });
      }
  });

  return router;
};


