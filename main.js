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
// lista cognimi
var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
//aggiungi cognome alla lista
listaCognomi.push(cognomeUtente);
// stampa la lista in ordine alfabetico
var ordineAlfabetico = listaCognomi.sort();
var posizioneUtente = listaCognomi.indexOf(cognomeUtente);
console.log(ordineAlfabetico);
console.log(posizioneUtente + 1);