((validationHelper)=>{
    let pattern = /@gmail.com/;
    validationHelper.uservalidation = async(name,phone,email,password) =>{
        if (name == "" || phone == "" || email == "" || password == "") {
            return false;
        }
        else if (phone.substring(0, 2) != "98") {
            return false;
        }
        else if (password.length != 8) {
            return false;
        }
        else if (pattern.test(email) == false) {
            return false;
        }
        else{
            return true;
        }
    };
})(module.exports);
