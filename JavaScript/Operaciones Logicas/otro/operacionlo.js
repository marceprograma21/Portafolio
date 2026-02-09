// Nueva función para la operación OR

function performOrOperation(event) {
    let input3 = document.getElementById("input3").checked;
    let input4 = document.getElementById("input4").checked;
    
    // Realiza la operación OR 
    
    let result = input3 || input4;
    alert("Resultado de OR: " + result);
}

console.log(true && false); // Devuelve false
console.log(false && true); // Devuelve false
console.log(true || false); // Devuelve true
console.log(false || true); // Devuelve true

let a = "5";
let b = "7";
console.log(a + b); // Devuelve "57" (concatenación de cadenas)

let city = "Berlin"; // stores a string
let age = 42; // stores a number
let isVerified = true; // stores a boolean
let height = 1.75; // stores a float (decimal number)
let hobbies = ["reading", "hiking", "cooking"]; // stores an array
let address = { street: "Main St", number: 123 }; // stores an object
let nullValue = null; // stores a null value
let undefinedValue; // stores an undefined value (no assignment)
let BigIntValue = 12345678901234567890n; // stores a BigInt (introduced in ECMAScript 2020)
let symbolValue = Symbol("id"); // stores a Symbol (unique identifier)


alert("Drag the console window up! So that you can see all input types!")


console.log('1️⃣ "Berlin" ➡️ is of type 👉 ' + typeof city); // logs string
console.log("2️⃣ " + 42 + " ➡️ is of type 👉 " + typeof age); // logs number
console.log("3️⃣ " + true + " ➡️ is of type 👉 " + typeof isVerified); // logs boolean
console.log("4️⃣ " + 1.75 + ' ➡️ is of type 👉 ' + typeof height); // logs number (float)
console.log('5️⃣ ["reading", "hiking", "cooking"] ➡️ is of type 👉 ' + typeof hobbies); // logs object (array)
console.log('6️⃣ {street:"Main St", number:123} ➡️ is of type 👉 ' + typeof address); // logs object
console.log("7️⃣ " + nullValue + " ➡️ is of type 👉 " + typeof nullValue); // logs object (null)
console.log("8️⃣ " + undefinedValue + " ➡️ is of type 👉 " + typeof undefinedValue); // logs undefined
console.log("9️⃣ " + BigIntValue + " ➡️ is of type 👉 " + typeof BigIntValue); // logs bigint
console.log('🔟 Symbol("id") ➡️ is of type 👉 ' + typeof symbolValue); // logs symbol

let balance = 100; // Initial balance
alert(typeof balance); // logs number

age = prompt("Enter your age:"); // User inputs their age
alert(typeof age); // logs string

let budget = prompt(); // User inputs their budget

let x = "55"; // x es un string
let y = Number(x); // Convierte x a un número e y es un número

alert(typeof y); // logs number

height = Number(prompt("Enter your height in meters:")); // User inputs height

alert(typeof height); // logs number

a = 29;
b = String (a); // Convierte a a un string

console.log(5 === 5); // Devuelve true

console.log(a = 10); // Asigna 10 a a 
console.log(b = true); // Asigna true a b
console.log(c = a > b); // Compara a y b
console.log(d = a === 1); // Compara a y 1

