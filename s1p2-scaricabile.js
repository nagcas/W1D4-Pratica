/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
    JavaScript possiede 8 Datatypes:

    1) String    - sono una sequenza di caratteri racchiuse tra virgolette "" o apici '';
    2) Number    - i numeri possono essere di tipo intero o di tipo decimale con o senza virgola;
    3) Bigint    - numeri interi di grandi dimensioni;
    4) Boolean   - sono valori che assumono solo true o false che ne rappresentano la logica;
    5) Undefined - è una variabile che è stata allocata in memoria ma non inizializzata;
    6) Null      - nessun valore definito;
    7) Symbol    - è stato introdotto nel 2015 da ECMAS, rappresenta un tipo di dati univoco, cioè unico che non può essere modificato dopo la sua creazione
    8) Object    - Un oggetto è una raccolta di proprietà e una proprietà è un'associazione tra una chiave e un valore. 
                   Il valore di una proprietà può essere una funzione definita come metodo. 
                   Gli oggetti in JavaScript, possono essere paragonati agli oggetti della vita reale.

*/

// esempio di tipo stringa:
let nome = "Corso Developer - Epicode";
console.log(nome);

// esempio di tipo number:
let base = 10;
let altezza = 25.45;
console.log(base, altezza);

// esempio di tipo bigint:
let q1 = BigInt("123456789123456789123456789");
console.log(q1);

// esempio di tipo boolean:
let a1 = true;
let a2 = false;
console.log(a1, a2);

// esempio di tipo undefined:
let automobile;
console.log(automobile);

// esempio di tipo object:
const giorni = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
console.table(giorni);

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
    Possiamo deefinire oggetto in javascript come un contenitore dove al suo interno sono contenute
    delle informazioni diverse che a loro volta sono definite come proprietà. Le proprietà
    possono contenere variabili, funzioni o altri oggetti. Un esempio di un oggetto è la creazione
    di una rubrica telefonica dove al suo interno possiamo definire diverse proprietà come:
    il nome, il cognome, l'età, indirizzo, città, cap, cellulare, telefono, indirizzo email ecc.
    L'oggetto in javascript sopra indicato possiamo indicarlo in questo modo:
*/

let rubrica = {
    nome: "Gianluca",
    cognome: "Chiaravalloti",
    eta: 47,
    indirizzo: "via Lattea n. 47",
    citta: "Saturno",
    cap: 11233,
    cellulare: 1234567891,
    telefono: 987654321,
    email: "corso_web_developer@epicode.com"
};

console.table(rubrica);
console.log(rubrica.nome, rubrica.cognome);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12;
let num2 = 20;
let somma = num1 + num2;

console.log("Somma di ", num1, "+", num2, "=", somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x;
x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name;
name = "Gianluca";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 4;
let diff;

diff = x - y;

console.log("Differenza di", x, "-", y, "=", diff);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1;
let name2;

name1 = "john";
name2 = "John";

let verifica = name1 == name2;
console.log("Stringa 1 =", name1, ";", "Stringa 2 =", name2);
console.log("Le due stringhe risultano:", verifica);

let verifica2 = name1.toLowerCase() == name2.toLowerCase();
console.log("Le due stringe dopo toLowerCase sono:", verifica2);
