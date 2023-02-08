const express = require('express')//dependicies find out libary
const calculation_helper= require('./calculationHelper')
const app = express()//assign in variable
const port = 3000
// function sum(a,b){
//   a=parseInt(a);
//   b=parseInt(b);
//   let totalsum=a+b;
//   return totalsum;
// };
const ab={
  'username':'shyam',
  'address':'ktm'
}
app.get('/getdata/users', (req, res) => {
  console.log(req.params);
  let a= calculation_helper.sum(10,20)
  calculation_helper.login(ab)
  console.log(a);
  // res.send(a);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})