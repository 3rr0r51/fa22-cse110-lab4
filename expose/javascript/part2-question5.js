// Question 5
function discountedPrices(prices, discount){
    var discounted = [];
    var finalPrice = 0;

    for(let i = 0; i < prices.length; i++){
        let discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    //console.log(i);
    console.log(discountedPrice);
    //console.log(finalPrice);

    return discounted;
}

console.log (discountedPrices([100, 200, 300], 0.5));