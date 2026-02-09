function checkDiscount() {
    let age = document.getElementById("age").value;
    let isstudent = document.getElementById("isstudent").checked;
    if (age<18 || isstudent) {
        alert("Tienes descuento");
    } else {
        alert("No tienes descuento");
    }
}

function calculate() {
    let product = document.getElementById("product").value;
    let insurance = document.getElementById("insurance").checked;
    let quantity = Number(document.getElementById("quantity").value);

    let total = product * quantity + (insurance && 10);

    let shipping = "";

    if (total > 400) {
    shipping = "Free";
    }
    else if (total > 100) {
    shipping = "Discounted";
    }
    else {
    shipping = "Standard";
    }

    let ship = document.getElementById("shipping");
    ship.textContent = ship.textContent + shipping;
}

if (age > 18) {
    console.log("Regular price");
}
else {
    console.log("Discount");
}

let items = 5;
let isCartEmpty = items > 0;
console.log(isCartEmpty);
