var curry={'INR':{'USD':0.014,'EUR':0.012,'YEN':1.50,'AUD':0.018,'GBP':0.0099,'FRF':0.07565,'PKR':2.29},
'USD':{'INR':72.99,'EUR':0.84,'YEN':109.71,'AUD':1.34,'GBP':0.72,'FRF':5.52282,'PKR':167.22},
'EUR':{'USD':1.19,'INR':86.74,'YEN':130.38,'AUD':1.59,'GBP':0.86,'FRF':6.55957,'PKR':198.71},
'YEN':{'USD':0.0091,'EUR':0.0077,'INR':0.67,'AUD':0.012,'GBP':0.0066,'FRF':0.0503276,'PKR':1.52},
'AUD':{'USD':0.75,'EUR':0.63,'YEN':81.84,'INR':54.44,'GBP':0.54,'FRF':4.1178925,'PKR':124.72},
'GBP':{'USD':1.39,'EUR':1.17,'YEN':151.91,'AUD':1.86,'INR':101.21,'FRF':7.654369,'PKR':231.84},
'FRF':{'USD':0.181175,'EUR':0.152449,'YEN':19.93,'AUD':0.242944,'GBP':0.130641,'INR':13.2188,'PKR':30.2971},
'PKR':{'USD':0.0060,'EUR':0.0050,'YEN':0.66,'AUD':0.0080,'GBP':0.0044,'FRF':0.0330065,'INR':0.44}}
var btn = document.querySelector('.calculate-btn');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');

function convertCurrency(event) {
  event.preventDefault();
  var amount = amountInput.value;
  var from = baseCurrencyInput.value;
  var to = secondCurrencyInput.value;
  var result = 0;
  
  try{
    if (from == to){
      result = amount;
    } else {
     result = amount * curry[from][to];
  }
  }
  catch(err) {
    result = amount * (1 / curry[to][from]);
  }
  
  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + ' = ';
  toShowSecond.textContent = to;
  toShowResult.textContent = result; 
}

btn.addEventListener('click', convertCurrency);
