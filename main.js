// Consegna:
/* 
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili. */

// cognome utente
var cognomeUtente = prompt('inserisci il tuo cognome');
var cognomeUtenteCorretto = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
// lista cognimi
var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
//aggiungi cognome alla lista
listaCognomi.push(cognomeUtenteCorretto);
// stampa la lista in ordine alfabetico
var ordineAlfabetico = listaCognomi.sort();
var posizioneUtente = Number(listaCognomi.indexOf(cognomeUtenteCorretto)) + 1;
console.log(ordineAlfabetico);
console.log(posizioneUtente);

for (var i = 0; i < listaCognomi.length; i++) {
    var content = document.getElementById("lista_cognomi").innerHTML;
    document.getElementById("lista_cognomi").innerHTML = content + '<li>' + listaCognomi[i] + '</li>';
}
document.getElementById('pos_utente').innerHTML = cognomeUtenteCorretto + ' sei in posizione ' + posizioneUtente;