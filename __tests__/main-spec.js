const {countProducts,fetchProduct,generateReceiptItems,countTotalPrice,assemble,generateReceipts} = require('../main');

it ('should count products', () => {
    //given
    const codes = ['0001','0003','0002','0003'];

    //when 
    const products = countProducts(codes);

    //then
    expect(products[1].count).toBe(1);
});

it('should fetch product',()=>{
    //given

    const code = "0001";

    //when
    const product = fetchProduct(code);

    //then
    expect(product.price).toBe(3);
})

it('结果验证',()=>{
    var codes = generateReceiptItems(['0003','0003','0001']);
    //console.log("generateReceiptItems:",codes);

    var total = countTotalPrice(codes);
    //console.log(total);

    var receiptText = assemble(codes,13);
    
    //console.log(receiptText);
})

//主函数调用
it('should generate Receipts',()=>{
   //given 
   const productCodes =  ['0001','0003','0002','0003'];

   //when
   var Receipts = generateReceipts(productCodes);
   
   //then
   expect(Receipts).toBe(
    "Receipts"+"\n"+
    "----------------"+"\n"+
    "Coca Cola"+"\t"+1+"\t"+3+"\n"+
    "Diet Coke"+"\t"+1+"\t"+4+"\n"+
    "Pepsi-Cola"+"\t"+2+"\t"+5+"\n"+
    "----------------"+"\n"+17
   );
})