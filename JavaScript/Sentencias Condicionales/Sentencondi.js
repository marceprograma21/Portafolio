let age = prompt();

if (age > 18) { 
    alert("Eres mayor de edad");
}
else {
    alert("Eres menor de edad");
}
nm
function check() {
    let ram = Number(prompt("Ingresa la cantidad de RAM (en GB) de tu PC:"));
    let element = document.getElementById("result");

    if (ram < 16) {
        element.innerHTML = "Para jugar el juego necesitas una RAM con alto rendimiento en tu PC.";
    } 
    else {
        element.textContent = "Tu PC cumple con los requisitos para jugar el juego.";
    }
}

age = 18;

let isOver18 = confirm();

    if (isOver18 === true) {
        alert("Descuento: 10%");
    }
    else {
        alert("Precio regular: 50%");
}

console.log(5 != 7); // es 5 diferente(distinto) de 7 -> true
console.log(5 >= 7); // es 5 mayor o igual a 7 -> false
console.log(5 <= 7); // es 5 menor o igual a 7 -> true