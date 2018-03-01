const express=require('express')
module.exports=function(){
  let router=express.Router();
  //检查是否登录，用 cookie 检查
  router.use((req,res,next)=>{
    if(!req.session['admin_id'] && req.url!='/login'){//没有 cookie并且不是在请求/admin/login，就去登录
      res.redirect('/admin/login');
    }else{
      next();
    }
  });
  router.use('/',require('./home')());
  router.use('/login',require('./login')());
  router.use('/course',require('./course')());
  router.use('/coursecontent',require('./coursecontent')());
  router.use('/message',require('./msg')());
  return router;
}
