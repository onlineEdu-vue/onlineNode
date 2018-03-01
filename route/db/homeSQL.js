module.exports={
  select:`SELECT * FROM courseDescription_table WHERE ID=?`,
  select1:`SELECT * FROM courseDescription_table`,
  del:`DELETE FROM courseDescription_table WHERE ID=?`,
  update:`UPDATE courseDescription_table SET 
   src=?,title=?,summary=?,tag1=?,tag2=?,
  number=?, href=?  WHERE ID=?`,
  update1:`UPDATE courseDescription_table SET title=?,
  summary=?,tag1=?,tag2=?,number=?,href=?
  WHERE ID=?`,
  insert:`INSERT INTO courseDescription_table 
  (src,title,summary,tag1,tag2,number, href)
  VALUE (?,?,?,?,?,?,?)`
}