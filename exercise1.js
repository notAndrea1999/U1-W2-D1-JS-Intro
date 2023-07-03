/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//Primo datatype ==> String: questo datatype rappresenta un testo ed e' contenuto all'inteno di apici ""
// let dataType1 = "Ciao"
//Secondo datatype ==> Number: questo datatype rappresenta un numero che puo' essere intero (int), con la virgola(float) o anche negativo
// let dataType2 = 16.2
//Terzo datatype ==> Boolean: questo datatype rappresenta due valori a seconda della condizione imposta ossia true o false
// const a = true
// const b = false
//Quarto datatype ==> Undefined: questo datatype rappresenta l'assenza di un valore nella variabile
// let datatype4 = undefined
//Quinto datatype ==> Null: questo datatype rappresenta l'assenza di un oggetto (object)
// let datatype5 = null

/* ESERCIZIO 2


 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Andrea";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let firstNumber = 12;
let secondNumber = 20;
let sum = firstNumber + secondNumber;
console.log(sum);
//we can also use:
console.log("Sum:", firstNumber + secondNumber);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "De Masi";
console.log(name);
//construtto const
const demonstration = 30;
// demonstration = 20; (if that line is not commented this wil happen: Uncaught TypeError: Assignment to constant variable. )
console.log(demonstration);
// shown result: exercise1.js:52 Uncaught TypeError: Assignment to constant variable.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - x); //Result:-8
//or
console.log(x - 4); //Result: 8

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 !== name2); //result: true;    !== stands for not equal
// we can also type:
console.log(name1 === name2); //result: false
//Extra:
console.log(name1.toLowerCase() === name2.toLowerCase()); //result: true because .toLowerCase() transforms "John" in "john"
