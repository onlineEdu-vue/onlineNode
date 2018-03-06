const express=require('express');
const mysql=require('mysql');
//上传文件用的
const pathLib=require('path')
const fs=require('fs')
//连接数据库
const dbConfig=require('../db/dbConfig');
const coursecontentSQL=require('../db/coursecontentSQL');
let db=mysql.createPool(dbConfig);

module.exports=function (){
  var router=express.Router();

  router.get('/', function (req, res){
    switch(req.query.act){
      case 'del':
        db.query(`SELECT * FROM coursecontent_table WHERE ID=${req.query.id}`, (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else{
            if(data.length==0){
              res.status(404).send('no this custom evaluation').end();
            }else{
              fs.unlink('static/upload/'+data[0].src, (err)=>{
                if(err){
                  console.error(err);
                  res.status(500).send('file opration error').end();
                }else{
                  db.query(`DELETE FROM coursecontent_table WHERE ID=${req.query.id}`, (err, data)=>{
                    if(err){
                      console.error(err);
                      res.status(500).send('database error').end();
                    }else{
                      res.redirect('/admin/coursecontent');
                    }
                  });
                }
              });
            }
          }
        });
        break;
      case 'mod':
        db.query(`SELECT * FROM coursecontent_table WHERE ID=${req.query.id}`, (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else if(data.length==0){
            res.status(404).send('no this evaluation').end();
          }else{
            db.query(`SELECT * FROM coursecontent_table`, (err, course1)=>{
              if(err){
                console.error(err);
                req.status(500).send('database error').end();
              }else{
                res.render('admin/coursecontentupdate.ejs', {course1, mod_data: data[0]});
              }
            });
          }
        });
        break;
      default:
        db.query(`SELECT * FROM coursecontent_table`, (err, course1)=>{
          if(err){
            console.error(err);
            req.status(500).send('database error').end();
          }else{
            res.render('admin/coursecontent.ejs', {course1});
          }
        });
    }
  });
  router.post('/', function (req, res){
const src=req.body.src;
    const alt=req.body.alt;
    const title=req.body.title;
    const description=req.body.description;
    const href=req.body.href;
    const diff=req.body.diff;
    const number=req.body.number;
    const diff1=req.body.diff1;
    const tag1=req.body.tag1;
    const tag2=req.body.tag2;
    const aim=req.body.aim;
    const aim1=req.body.aim1;
    const aim2=req.body.aim2;
    const aim3=req.body.aim3;
    const aim4=req.body.aim4;
    const aim5=req.body.aim5;
    const aim6=req.body.aim6;
    const aim7=req.body.aim7;
    const aim8=req.body.aim8;
    const task=req.body.task;
    const task1=req.body.task1;
    const idel=req.body.idel;
    const idel1=req.body.idel1;
    const idel2=req.body.idel2;
    const idel3=req.body.idel3;
    const idel4=req.body.idel4;
    const idel5=req.body.idel5;
    const idel6=req.body.idel6;
    const idel7=req.body.idel7;
    const idel8=req.body.idel8;
    const idel9=req.body.idel9;
    const reference=req.body.reference;
    const reference1=req.body.reference1;
    const reference2=req.body.reference2;
    const reference3=req.body.reference3;

    if(req.files[0]){
      var ext=pathLib.parse(req.files[0].originalname).ext;

      var oldPath=req.files[0].path;
      var newPath=req.files[0].path+ext;

      var newFileName=req.files[0].filename+ext;
    }else{
      var newFileName=null;
    }

    if(newFileName){
      fs.rename(oldPath, newPath, (err)=>{
        if(err){
          console.error(err);
          res.status(500).send('file opration error').end();
        }else{
          if(req.body.mod_id){  //修改
            //先删除老的
            db.query(`SELECT * FROM coursecontent_table WHERE ID=${req.body.mod_id}`, (err, data)=>{
              if(err){
                console.error(err);
                res.status(500).send('database error').end();
              }else if(data.length==0){
                res.status(404).send('old file not found').end();
              }else{
                fs.unlink('static/upload/'+data[0].src, (err)=>{
                  if(err){
                    console.error(err);
                    res.status(500).send('file opration error').end();
                  }else{
                    db.query(`UPDATE coursecontent_table SET \
                      src='${newFileName}',alt='${alt}',diff='${diff}',\
                      number='${number}',title='${title}',diff1='${diff1}',\
                      description='${description}', tag1='${tag1}', tag2='${tag2}',\
                      aim='${aim}',aim1='${aim1}',aim2='${aim2}',aim3='${aim3}',aim4='${aim4}',\
                      aim5='${aim5}',aim6='${aim6}',aim7='${aim7}',aim8='${aim8}',task='${task}',\
                      task1='${task1}',idel='${idel}',idel1='${idel1}',idel2='${idel2}',idel3='${idel3}',\
                      idel4='${idel4}',idel5='${idel5}',idel6='${idel6}',idel7='${idel7}',\
                      idel8='${idel8}',idel9='${idel9}',reference='${reference}',reference1='${reference1}',\
                      reference2='${reference2}',reference3='${reference3}'\
                      WHERE ID=${req.body.mod_id}`, (err)=>{
                        if(err){
                          console.log(898989);
                          console.error(err);
                          res.status(500).send('database error').end();
                        }else{
                          res.redirect('/admin/coursecontent');
                        }
                      });
                  }
                });
              }
            });
          }else{                //添加
            db.query(`INSERT INTO coursecontent_table 
            (src,alt,diff,number,title,diff1, description, tag1,tag2,aim,
            aim1,aim2,aim3,aim4,aim5,aim6,aim7,aim8,task,task1,idel,idel1,
            idel2,idel3,idel4,idel5,idel6,idel7,idel8,idel9,reference,reference1,
            reference2,reference3) VALUES ('${newFileName}','${alt}','${diff}','${number}',\
            '${title}','${diff1}','${description}','${tag1}','${tag2}',\
            '${aim}', '${aim1}', '${aim2}', '${aim3}', '${aim4}', '${aim5}',\
            '${aim6}', '${aim7}', '${aim8}', '${task}', '${task1}', '${idel}',\
            '${idel1}', '${idel2}','${idel3}', '${idel4}','${idel5}', '${idel6}',\
            '${idel7}', '${idel8}','${idel9}', '${reference}','${reference1}',\
            '${reference2}','${reference3}')`, (err, data)=>{
              if(err){
                console.error(err);
                res.status(500).send('database error').end();
              }else{
                res.redirect('/admin/coursecontent');
              }
            });
          }
        }
      });
    }else{
      if(req.body.mod_id){  //修改
        //直接改
        db.query(`UPDATE coursecontent_table SET \
        alt='${alt}',diff='${diff}',\
        number='${number}',title='${title}',diff1='${diff1}',\
        description='${description}', tag1='${tag1}', tag2='${tag2}',\
        aim='${aim}',aim1='${aim1}',aim2='${aim2}',aim3='${aim3}',aim4='${aim4}',\
        aim5='${aim5}',aim6='${aim6}',aim7='${aim7}',aim8='${aim8}',task='${task}',\
        task1='${task1}',idel='${idel}',idel1='${idel1}',idel2='${idel2}',idel3='${idel3}',\
        idel4='${idel4}',idel5='${idel5}',idel6='${idel6}',idel7='${idel7}',\
        idel8='${idel8}',idel9='${idel9}',reference='${reference}',reference1='${reference1}',\
        reference2='${reference2}',reference3='${reference3}'
          WHERE ID=${req.body.mod_id}`, (err)=>{
            if(err){
              console.log(1111111111);
              console.error(err);
              res.status(500).send('database error').end();
            }else{
              res.redirect('/admin/coursecontent');
            }
          });
      }else{                //添加
        db.query(`INSERT INTO coursecontent_table 
            (src,alt,diff,number,title,diff1, description, tag1,tag2,aim,
            aim1,aim2,aim3,aim4,aim5,aim6,aim7,aim8,task,task1,idel,idel1,
            idel2,idel3,idel4,idel5,idel6,idel7,idel8,idel9,reference,reference1,
            reference2,reference3) VALUES('${newFileName}','${alt}','${diff}','${number}',\
            '${title}','${diff1}','${description}','${tag1}','${tag2}',
            '${aim}', '${aim1}', '${aim2}', '${aim3}', '${aim4}', '${aim5}',
            '${aim6}', '${aim7}', '${aim8}', '${task}', '${task1}', '${idel}',
            '${idel1}', '${idel2}','${idel3}', '${idel4}','${idel5}', '${idel6}',
            '${idel7}', '${idel8}','${idel9}', '${reference}','${reference1}',
            '${reference2}','${reference3}')`, (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else{
            res.redirect('/admin/coursecontent');
          }
        });
      }
    }
  });

  return router;
};

