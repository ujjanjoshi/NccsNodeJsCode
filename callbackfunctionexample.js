const orders=[
    {"friuts":"mango",qty:10},
    {"friuts":"orange",qty:3},

]
function getOrderItems(){
    console.log("getOrder==",orders)
}
function addNewItem(getOrderItems){
    setTimeout(()=>{
        orders.push( {"friuts":"apple",qty:4})
        getOrderItems();
    },6000);
    
}

addNewItem(getOrderItems);