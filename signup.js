const express = require('express');
const app = express();
const port = 5000;
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
app.post('/signup', function (req, res) {
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
    console.log(`Example app listening on port ${port}`)
})