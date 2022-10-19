/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22
*/

let nomePersona = prompt("Quale è il tuo nome?");

let cognomePersona = prompt("Quale è il tuo cognome?");

let colorePrefe = prompt("Quale è il tuo colore preferito?");

document.getElementById("completo").innerHTML = nomePersona+cognomePersona+colorePrefe+22;

