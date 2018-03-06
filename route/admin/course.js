const express=require('express');
const mysql=require('mysql');
//上传文件用的
const pathLib=require('path')
const fs=require('fs')
//连接数据库
const dbConfig=require('../db/dbConfig');
let db=mysql.createPool(dbConfig);

module.exports=function (){
  var router=express.Router();

  router.get('/', function (req, res){
    switch(req.query.act){
      case 'del':
        db.query(`SELECT * FROM course_table WHERE ID=${req.query.id}`, (err, data)=>{
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
                  db.query(`DELETE FROM course_table WHERE ID=${req.query.id}`, (err, data)=>{
                    if(err){
                      console.error(err);
                      res.status(500).send('database error').end();
                    }else{
                      res.redirect('/admin/course');
                    }
                  });
                }
              });
            }
          }
        });
        break;
      case 'mod':
        db.query(`SELECT * FROM course_table WHERE ID=${req.query.id}`, (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else if(data.length==0){
            res.status(404).send('no this evaluation').end();
          }else{
            db.query(`SELECT * FROM course_table`, (err, course)=>{
              if(err){
                //console.log(78);
                console.error(err);
                req.status(500).send('database error').end();
              }else{
                res.render('admin/courseupdate.ejs', {course, mod_data: data[0]});
              }
            });
          }
        });
        break;
      default:
        db.query(`SELECT * FROM course_table`, (err, course)=>{
          if(err){
            console.error(err);
            req.status(500).send('database error').end();
          }else{
            res.render('admin/course.ejs', {course});
          }
        });
    }
  });
  router.post('/', function (req, res){
    const title=req.body.title;
    const description=req.body.description;
    const href=req.body.href;
    const diff=req.body.diff;
    const number=req.body.number;
    const diff1=req.body.diff1;
    const alt=req.body.alt;

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
            db.query(`SELECT * FROM course_table WHERE ID=${req.body.mod_id}`, (err, data)=>{
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
                    db.query(`UPDATE course_table SET \
                      src='${newFileName}',alt='${alt}',diff='${diff}',\
                      number='${number}',title='${title}',diff1='${diff1}',\
                       description='${description}', href='${href}'\
                      WHERE ID=${req.body.mod_id}`, (err)=>{
                        if(err){
                         // console.log(898989);
                          console.error(err);
                          res.status(500).send('database error').end();
                        }else{
                          res.redirect('/admin/course');
                        }
                      });
                  }
                });
              }
            });
          }else{                //添加
            db.query(`INSERT INTO course_table \
            (src,alt,diff,number,title,diff1, description, href)
            VALUES('${newFileName}','${alt}','${diff}','${number}',\
            '${title}','${diff1}','${description}','${href}')`, (err, data)=>{
              if(err){
                console.error(err);
                res.status(500).send('database error').end();
              }else{
                res.redirect('/admin/course');
              }
            });
          }
        }
      });
    }else{
      if(req.body.mod_id){  //修改
        //直接改
        db.query(`UPDATE course_table SET \
          alt='${alt}', diff='${diff}',number='${number}', \
          title='${title}', diff1='${diff1}', \
          description='${description}', href='${href}' \
          WHERE ID=${req.body.mod_id}`, (err)=>{
            if(err){
              console.error(err);
              res.status(500).send('database error').end();
            }else{
              res.redirect('/admin/course');
            }
          });
      }else{                //添加
        db.query(`INSERT INTO course_table \
         (src,alt,diff,number,title,diff1, description, href)
        VALUES('${newFileName}','${alt}','${diff}','${number}',\
            '${title}','${diff1}','${description}','${href}')`, (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else{
            res.redirect('/admin/course');
          }
        });
      }
    }
  });

  return router;
};
