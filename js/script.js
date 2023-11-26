// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//     il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     va applicato uno sconto del 20% per i minorenni
//     va applicato uno sconto del 40% per gli over 65. 

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

let nome = document.getElementById("username");
let distanza = document.getElementById("distanza");
let eta = document.querySelector(".user-eta");

let biglietto = document.getElementById("personal-ticket");

let passengerName = document.getElementById("passenger-name");
let costo = document.getElementById("risultato");


document.getElementById("submit").addEventListener("click",

    function() {
        let distanzaNumerica = parseInt(distanza.value);

        biglietto.classList.remove("d-none");
        ringraziamenti.classList.remove("d-none");

        let ticketPrice = distanzaNumerica * 0.21;
        let risultato = 0;

        if(eta.value == '1') {
            risultato = ticketPrice - (ticketPrice * 0.2);
        } else if (eta.value == '3') {
            risultato = ticketPrice - (ticketPrice * 0.45);
        } else {
            risultato = ticketPrice;
        }

        costo.innerHTML = `${risultato.toFixed(2)} €`;
        passengerName.innerHTML = nome.value;
    }
);

document.getElementById("delete").addEventListener("click",

    function() {
        biglietto.classList.add("d-none");
        ringraziamenti.classList.add("d-none");
        nome.value = "";
        distanza.value = "";
        eta.value = "";
    }
)


// Output prezzo finale con massimo due decimali
document.getElementById("ringraziamenti").innerHTML = "Grazie e buon viaggio!";