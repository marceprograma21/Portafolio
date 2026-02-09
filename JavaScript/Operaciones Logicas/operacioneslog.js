function performAndOperation() {
    let input1 = document.getElementById("input1").checked;
    let input2 = document.getElementById("input2").checked;
    let result = input1 && input2;
    alert("Resultado de AND: " + result);
}
