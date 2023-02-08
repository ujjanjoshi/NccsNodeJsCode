const express= require('express');
const app= express();
const port = 4000;
app.use(express.json());//conrt objt to sting
app.use(express.urlencoded({ extended: true }));
app.post('/api/users', function(req, res) {
    const user_id = req.body.id;
    const token = req.body.token;
    const geo = req.body.geo;
  
    res.send({
      'user_id': user_id,
      'token': token,
      'geo': geo
    });
  });
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })