const express= require('express');

let app = express();
app.get('/',(req,res)=>{
  res.send('<h1>Welcome</h1>')
})
app.listen(9999);
console.log("Its working");
