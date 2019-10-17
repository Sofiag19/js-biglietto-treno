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
var kmreq;
var agereq;
var priceway;
var finalprice;

// km request
kmreq = prompt("Ciao, quanti kilometri devi percorrere?");

// age request
agereq = prompt("Quanti anni hai?");

// price way (0.21 €cent al km)
priceway = kmreq * 0.21;

// setting discount
if (agereq < 18){
  finalprice = priceway - ((priceway * 20)/ 100);
} else if (agereq > 65){
  finalprice = priceway - ((priceway * 40)/ 100);
}else {
  finalprice = priceway;
}

// page output
document.getElementById('price').innerHTML = "Salve, per il suo tragitto dovrà spendere " + finalprice.toFixed(2) + " €";
