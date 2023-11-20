// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//     il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     va applicato uno sconto del 20% per i minorenni
//     va applicato uno sconto del 40% per gli over 65. 

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


let risultato = "";

const inputName = document.querySelector(".userName");

const sendButton = document.getElementById("add-ticket");

let userName;

console.log(inputName);

console.log(inputName.value);

sendButton.addEventListener("click",

    function() {
        userName = inputName.value;
        console.log(userName);
    }
)

// Chiediamo a User numero chilometri che vuole percorrere
const inputKm = parseInt(document.querySelector(".userKm"));

let userKm;

console.log("Numero chilometri scelti: ", inputKm, 'km');

console.log(inputKm.value);

sendButton.addEventListener("click",

    function() {
        userKm = inputKm.value;
        console.log(userKm);
    }
)

// Chiediamo a User la sua età
const inputEta = parseInt(document.getElementById("userEta"));

let userEta;

console.log(`Età: ${inputEta} anni`);

console.log(inputEta.value);

sendButton.addEventListener("click",

    function() {
        userEta = inputEta.value;
        console.log(userEta);
    }
)

// Calcoliamo il prezzo del biglietto in base ai km
const ticketPrice = inputKm * 0.21;

console.log(`Il prezzo del biglietto in base ai chilometri selezionati è di: ${ticketPrice}€`);

// Analizziamo se il cliente è minorenne o over 65
if (userEta < 18) {
    console.log("Sei minorenne! Hai accesso ad uno sconto del 20% sul prezzo del biglietto!");
} else if (userEta >= 65) {
    console.log("Sei un over 65! Hai accesso ad uno sconto del 40% sul prezzo del biglietto!");
}

// Applichiamo uno sconto del 20% per i minorenni + Applichiamo uno sconto del 40% per gli over 65
if (inputEta < 18) {
    risultato = ticketPrice - [(ticketPrice / 100) * 20];
} else if (inputEta >= 65) {
    risultato = ticketPrice - [(ticketPrice / 100) * 40];
} else {
    risultato = ticketPrice
}

console.log(`Il prezzo del biglietto con eventuale sconto applicato è quindi di: ${risultato.toFixed(2)}€`);

// Output prezzo finale con massimo due decimali
document.getElementById("mio_id").innerHTML = `Cifra finale da corrispondere per il biglietto: ${risultato.toFixed(2)}€`;

document.getElementById("tuo_id").innerHTML = "Grazie e buon viaggio!";