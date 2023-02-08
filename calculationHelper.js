((calculationHelper) => {
    const b1=10;

    calculationHelper.sum = (a, b)=> {
        console.log(b1)
        return a + b
    }
    calculationHelper.login=async(request)=>{
        const isvalid = await calculationHelper.loginvalidation(request)
        if (isvalid){
            console.log("sucess")
        }
        else{
            // status: httpStatus.BAD_GATEWAY, message:"Username requred!",
            console.log('login required')
        }
    }
    calculationHelper.loginvalidation=(request)=>{
        if(request.username=="ram"){
            return true
        }
        return false
    }

})(module.exports)

// function sum(a,b){
//     a=parseInt(a);
//     b=parseInt(b);
//     let totalsum=a+b;
//     return totalsum;
// };
// // module.exports=sum;
// module.exports.sum=sum;