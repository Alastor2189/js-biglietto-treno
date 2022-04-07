// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

const numKm = parseInt(prompt('Quanti sono i km da percorrere?'));
console.log(numKm);
const clientAge = parseInt(prompt('Inserisci la tua età'));
console.log(clientAge);
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const priceKm = 0.21;
const ticketPrice = priceKm * numKm;
// va applicato uno sconto del 20% per i minorenni

let totalPrice
if (clientAge < 18) {
    totalPrice = ticketPrice - (ticketPrice * 0.20);

}
// va applicato uno sconto del 40% per gli over 65.
else if (clientAge > 65) {
    totalPrice = ticketPrice - (ticketPrice * 0.40);
} else {
    ticketPrice = totalPrice
}

console.log(totalPrice);
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

document.getElementById("total-price").innerHTML = ' € ' + (totalPrice.toFixed(2)).replace('.', ',');
// L'output va stampato nella pagina HTML.