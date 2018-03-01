module.exports={
  insert:`INSERT INTO msg_table (message, message1, message2, message3, message4, message5, message6, 
          message7,message8, message9, message10, product, product1, product2, product3, product4, product5, 
          product6, product7, product8, product9, product10, finance, finance1, finance2, finance3, finance4, finance5,
          finance6, finance7, finance8, finance9, finance10) 
          VALUE(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
  del:`DELETE FROM msg_table WHERE ID=?`,
  select:`SELECT * FROM msg_table`,
  select1:`SELECT * FROM msg_table WHERE id=?`,
  update:`UPDATE msg_table SET message=?,message1=?,message2=?,
  message3=?,message4=?,message5=?,message6=?,message7=?,message8=?,message9=?,
  message10=?,product=?,
  product1=?,product2=?,product3=?,product4=?,product5=?,product6=?,
  product7=?,product8=?,product9=?,product10=?,finance=?,finance1=?,
  finance2=?,finance3=?,finance4=?,finance5=?,finance6=?,finance7=?,
  finance8=?,finance9=?,finance10=?WHERE ID=?`
}