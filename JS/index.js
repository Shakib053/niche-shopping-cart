
//corresponding changes for each click
document.getElementById('16gb-memory').addEventListener('click', function () {
    document.getElementById('memory-cost').innerHTML = 180;
    calculateCost();

})
document.getElementById('8gb-memory').addEventListener('click', function () {
    document.getElementById('memory-cost').innerHTML = 0;
    calculateCost();

})
document.getElementById('256gb-storage').addEventListener('click', function () {
    document.getElementById('storage-cost').innerHTML = 0;
    calculateCost();
})
document.getElementById('512gb-storage').addEventListener('click', function () {
    document.getElementById('storage-cost').innerHTML = 100;
    calculateCost();

})
document.getElementById('1tb-storage').addEventListener('click', function () {
    document.getElementById('storage-cost').innerHTML = 180;
    calculateCost();

})
document.getElementById('free-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerHTML = 0;
    calculateCost();
})
document.getElementById('charge-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerHTML = 20;
    calculateCost();

})

//calculate the cost for both discounted and undiscounted total
function calculateCost() {
    let basePrice = 1299;
    let memoryCost = document.getElementById('memory-cost').innerText;
    let storageCost = document.getElementById('storage-cost').innerText;
    let deliveryCost = document.getElementById('delivery-cost').innerText;
    memoryCost = parseFloat(memoryCost);
    storageCost = parseFloat(storageCost);
    deliveryCost = parseFloat(deliveryCost);
    let totalPrice = memoryCost + storageCost + deliveryCost + basePrice;
    document.getElementById('total-cost').innerText = totalPrice;
    document.getElementById('discounted-total').innerText = totalPrice;

}


//function to check whether the given promo code is valid or not
function isOk(text) {
    if (text == 'stevekaku')
        return true;
    else
        return false;
}

//promo button for discount

document.getElementById('promo-btn').addEventListener('click', function () {
    const typedText = document.getElementById('typed-text').value;

    if (isOk(typedText) == true) {
        // document.getElementById('promo-btn').disabled = true;
        let withoutDiscount = document.getElementById('total-cost').innerText;
        withoutDiscount = parseFloat(withoutDiscount);
        let discount = (20 / 100) * withoutDiscount;
        const finalTotal = withoutDiscount - discount;
        document.getElementById('typed-text').value = '';
        document.getElementById('discounted-total').innerText = finalTotal;
    }
    else {
        alert('you entered an invalid promo code');
        document.getElementById('typed-text').value = '';
    }
})