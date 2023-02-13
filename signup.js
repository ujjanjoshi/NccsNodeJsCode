const express = require('express');
const validationHelper=require('./validationHelper');
require('dotenv').config()
const app = express();
const port = 5000;

const mysqlHelper= require("./mysqlHelper")
app.use(express.json());//conrt objt to sting
app.use(express.urlencoded({ extended: true }));

let ab = [{
    "username": "ram",
    "password": "123"
},
{
    "username": "shyam",
    "password": "1234"
},
{
    "username": "hari",
    "password": "1235"
}
]
app.post('/signup', async function (req, res) {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    let output = await validationHelper.uservalidation(name,phone,email,password)
  
   
    if (output == true) {
        console.log("INSERT INTO Signup (name,phone,email,password) VALUES ('"+name+"','"+phone+"','"+email+"','"+password+"')")
        // var sql = "INSERT INTO `login` (username, password) VALUES (" + name + "," + password + ")";
        mysqlHelper.query("INSERT INTO Signup (name,phone,email,password) VALUES ('"+name+"','"+phone+"','"+email+"','"+password+"')");
        res.send('SignUp Succesful')
    }
}
);
app.post('/login', function (req, res) {
    const user_name = req.body.username;
    const password = req.body.password;
    let output;
    ab.forEach(e => {
        if (user_name == e.username && password == e.password) {
            output = "Welcome " + user_name.toUpperCase() + "!!";

        }
        else {
            output = "User " + user_name + " not recognized"
        }

    });
    res.send(output)
});

app.listen(port, () => {
    mysqlHelper.init();
    console.log(`Example app listening on port ${port}`)
})