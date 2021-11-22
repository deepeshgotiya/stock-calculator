const initialStockPrice = document.querySelector("#stock-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const button = document.querySelector("#checkBtn");
const output = document.querySelector("#outputDiv");

function profitLossCalculator (stock,quantity,current){
    if(stock>current){
        var loss = (stock - current)*quantity;
        var lossPercentage = (loss/stock)/100;
        outputMessage(`Your loss is ${loss} and loss percent is ${lossPercentage}%`)
    }else if(current>stock){
        var profit = (current-stock)*quantity;
        var profitPercentage = (profit/stock)*100;
        outputMessage(`Your loss is ${profit} and loss percent is ${profitPercentage}%`)
    }else{
        outputMessage(`There is no loss or profit in your Stock`)
    }
}

// profitLossCalculator(10,10,100)
// profitLossCalculator(10,10,100)
function stockCalculator (){
    var profitLoss = profitLossCalculator(Number(initialStockPrice.value),Number(stockQuantity.value),Number(currentPrice.value))
}

function outputMessage(message){
    output.innerHTML = message;
}
// function errorHandler(){
//     if (initialStockPrice.value == "" || initialStockPrice.value == null){
//         output.innerText="Enter some value"
//     }
// }

button.addEventListener("click", stockCalculator,)
