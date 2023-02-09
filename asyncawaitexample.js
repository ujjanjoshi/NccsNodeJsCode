(async()=>{
const orders=[
    {"friuts":"mango",qty:10},
    {"friuts":"orange",qty:3},

]
async function getOrderItems(){
    console.log("getOrder==",orders)
}
async function addNewItem(){
    return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        orders.push( {"friuts":"apple",qty:4})  
        resolve(true)
    },6000);
});
    // return new Promise ((resolve,reject)=>{
    //     const err=false;
    //     setTimeout(()=>{
    //             orders.push( {"friuts":"apple",qty:4})
    //             resolve(true);
    //             if(err)
    //             reject()
    //         },6000);   
}

const order=  await addNewItem();
console.log(order)
if(order)
await getOrderItems();
})()