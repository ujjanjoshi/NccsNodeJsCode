const { response } = require("express");

const orders=[
    {"friuts":"mango",qty:10},
    {"friuts":"orange",qty:3},

]
function getOrderItems(){
    console.log("getOrder==",orders)
}
function addNewItem(getOrderItems){
    // setTimeout(()=>{
    //     orders.push( {"friuts":"apple",qty:4})
    //     getOrderItems();
    // },6000);
    return new Promise ((resolve,reject)=>{
        const err=false;
        setTimeout(()=>{
                orders.push( {"friuts":"apple",qty:4})
                resolve(true);
                if(err)
                reject()
            },6000);
    })
    
}

addNewItem().then(response=> {
    console.log("item pushed")
    getOrderItems();
}).catch((err)=>{
    console.log("error")
});