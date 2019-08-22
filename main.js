const db = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];


function countProducts (codes) {
   const code = codes.sort();
   let result = [];
   let count = 0;
   for(let i =0;i<code.length;i++){
 
       let obj = {};
       if(code[i] === code[i+1]){
            count++;
       }else{
            obj.code = code[i];
            obj.count = count+1;
               count = 0;
               result.push(obj);
       }
   }
    return result;
}

function fetchProduct(code){
    for(let i=0;i<db.length;i++){
        if(db[i].id === code){
            return{
                price:db[i].price,
                name:db[i].name
            }
        }
    }
}
function generateReceiptItems(codes){
    let countProduct = countProducts(codes);
    var ReceiptItems = [];
    countProduct.forEach(function(value){
        var items = fetchProduct(value.code);
        ReceiptItems.push({
            name:items.name,
            price:items.price,
            count:value.count
        })
    })
    return ReceiptItems;
}

function countTotalPrice(codes){
    let total = 0;
    codes.forEach(function(item){
        total += item.price * item.count;
    })
    return total;
}
function assemble(assembleInput,num){
    let str = "Receipts"+"\n"+"----------------"+"\n";
    assembleInput.forEach(function(item){
        str += item.name + "\t"+item.count+"\t"+item.price+"\n";
    })
    return str+"----------------"+"\n"+num;
}

//主函数generateReceipts
function generateReceipts(productCodes){ 
    let receiptItems = generateReceiptItems(productCodes);
    let total = countTotalPrice(receiptItems);
    let str = assemble(receiptItems,total);
    return str;
}

module.exports = {
    countProducts,
    fetchProduct,
    generateReceiptItems,
    countTotalPrice,
    assemble,
    generateReceipts
}







    // var map = new Map();
    // for(let i = 0;i<codes.length;i++){
    //     var code = codes[i];
    //     if(!map.has(code)){
    //         map.set(code,{code:code,count:1});
    //     }else{
    //         map.set(code,{code:code,count:map.get(code).count+1});
    //     }
    // }
    
    // var items = [];
    // map.forEach(function(item){
    //     items.push(item);
    // })
    // return items