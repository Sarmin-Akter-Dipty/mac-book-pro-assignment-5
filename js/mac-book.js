// Best Price
const bestPrice = document.getElementById('best-price');

//Memory Section 
const memorySmall = document.getElementById('memory-small');
const memoryLarge = document.getElementById('memory-large');
const extraMemoryCost = document.getElementById('memory-cost');

//Storage Section
const storageSmall = document.getElementById('storage-small');
const storageMedium = document.getElementById('storage-medium');
const storageLarge = document.getElementById('storage-large');
const extraStorageCost = document.getElementById('storage-cost');

//Delivery Section
const deliveryFree = document.getElementById('delivery-free');
const deliveryCost = document.getElementById('delivery-cost');
const extraDeliveryCost = document.getElementById('extra-delivery-cost');

// Total Price  
const updateTotalPrice = document.getElementById('total-price');

// Total Price Calculation
function priceCalculation() {
    const totalMemoryCost = parseFloat(extraMemoryCost.innerText);
    const totalStorageCost = parseFloat(extraStorageCost.innerText);
    const totalDeliveryCost = parseFloat(extraDeliveryCost.innerText);
    const updateBestPrice = parseFloat(bestPrice.innerText);
    let totalPrice = updateBestPrice + totalMemoryCost + totalStorageCost + totalDeliveryCost;
    updateTotalPrice.innerText = totalPrice;
    total.innerText = totalPrice;
}

// Total section
let total = document.getElementById('total');

//Memory Handler
memorySmall.addEventListener('click', function () {
    extraMemoryCost.innerText = "0";
    priceCalculation()
})
memoryLarge.addEventListener('click', function () {
    extraMemoryCost.innerText = "180";
    priceCalculation()
})

//Storage Handler
storageSmall.addEventListener('click', function () {
    extraStorageCost.innerText = "0";
    priceCalculation()
})
storageMedium.addEventListener('click', function () {
    extraStorageCost.innerText = "100";
    priceCalculation()
})
storageLarge.addEventListener('click', function () {
    extraStorageCost.innerText = "180";
    priceCalculation()
})

//Delivery Section
deliveryFree.addEventListener('click', function () {
    extraDeliveryCost.innerText = "0";
    priceCalculation()
})
deliveryCost.addEventListener('click', function () {
    extraDeliveryCost.innerText = "20";
    priceCalculation()
})


//Promo Code
let promoInput = document.getElementById('promo-code');
let promoButton = document.getElementById('apply-btn');
promoButton.addEventListener('click', function () {
    promoCode();
})
function promoCode() {
    if (promoInput.value == 'stevekaku') {
        total.innerText = parseInt(total.innerText) - (parseInt(total.innerText) * 0.2);
        promoInput.value = '';
    }
    else {
        alert('invalid promo code');
    }
}
