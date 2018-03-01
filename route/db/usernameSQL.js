module.exports={
  select:`SELECT graduate FROM user_table WHERE username=`,
  updata:`UPDATE user_table SET graduate=graduate-100  WHERE username=?`
}