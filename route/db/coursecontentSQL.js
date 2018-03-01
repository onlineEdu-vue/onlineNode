module.exports={
  sel1:`SELECT * FROM coursecontent_table WHERE ID=?`,
  sel:`SELECT * FROM coursecontent_table`,
  del:`DELETE FROM coursecontent_table WHERE ID=?`,
  update:`UPDATE coursecontent_table SET 
  src=?,alt=?,diff=?,number=?,title=?,diff1=?,
  description=?, tag1=?, tag2=?,aim=?,aim1=?,aim2=?,aim3=?,aim4=?,
  aim5=?,aim6=?,aim7=?,aim8=?,task=?,task1=?,idel=?,idel1=?,idel2=?,idel3=?,
  idel4=?,idel5=?,idel6=?,idel7=?,idel8=?,idel9=?,reference=?,reference1=?,
  reference2=?,reference3=?  WHERE ID=?`,
  insert:`INSERT INTO coursecontent_table 
  (src,alt,diff,number,title,diff1, description, tag1,tag2,aim,
  aim1,aim2,aim3,aim4,aim5,aim6,aim7,aim8,task,task1,idel,idel1,
  idel2,idel3,idel4,idel5,idel6,idel7,idel8,idel9,reference,reference1,
  reference2,reference3) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
    ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
}