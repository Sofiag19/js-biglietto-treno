/* l programma dovrà chiedere all’utente il numero di chilometri
e l’età
e dovrà calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
ma c’è uno sconto del 20% per i minorenni
e del 40% per gli over 65
NOTE:
- parto dal rileggere e comprendere a fondo la richiesta;
- per sicurezza me la copio come commento nel mio js;
- parto di commenti e/o pseudo code;
- inizio a scrivere passo passo il codice reale della mia app;
- quindi ogni tot faccio dei log per vedere se tutto mi torna e poi vado avanti;
- parto con dei semplici log e se E SOLO SE tutto funziona e ho capito quello che ho fatto, vado a migliorare il mio output in pagina con html+css.*/

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
