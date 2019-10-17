// js calcolo tariffa tratta

// general
var kmReq;
var ageReq;
var priceWay;
var finalPrice;

// km request
kmReq = prompt("Ciao, quanti kilometri devi percorrere?");

// age request
ageReq = prompt("Quanti anni hai?");

// price way (0.21 €cent al km)
priceWay = kmReq * 0.21;

// setting discount
if (ageReq < 18){
  finalPrice = priceWay - ((priceWay * 20)/ 100);
} else if (ageReq > 65){
  finalPrice = priceWay - ((priceWay * 40)/ 100);
}else {
  finalPrice = priceWay;
}

// page output
document.getElementById('price').innerHTML = "Salve, per il suo tragitto dovrà spendere " + finalPrice.toFixed(2) + " €";
