function updateproductnumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    
    

    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber>0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-number').value;
    return productInput;
    
}

function calculateTotal(){
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

//case increase events
document.getElementById('case-plus').addEventListener('click', function(){
    updateproductnumber('case', 59, true);

})
//case decrease events
document.getElementById('case-minus').addEventListener('click', function(){
    updateproductnumber('case', 59, false);
})

//phone increase events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateproductnumber('phone', 1219, true);
})
//phone decrease events
document.getElementById('phone-minus').addEventListener('click', function(){
    updateproductnumber('phone', 1219, false);
})