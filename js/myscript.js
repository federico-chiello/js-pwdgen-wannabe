// Chiedi all’utente il suo nome, poi il suo cognome, poi il suo colore preferito.
// Infine scrivi sulla pagina nomecognomecolorepreferito20.

var nome, cognome, colorePreferito;

// nome
nome = prompt('Inserisci il tuo nome:');

// console.log(nome);

// cognome
cognome = prompt('Inserisci il tuo cognome:');

// console.log(cognome);

// colore preferito
colorePreferito = prompt('Inserisci il tuo colore preferito:');

// console.log(colorePreferito);

// Inserimento nomecognomecolorepreferito20
document.getElementById('testo').innerHTML = nome + cognome + colorePreferito + '20';
