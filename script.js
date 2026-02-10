// Boton para mostrar y ocultar proyectos
const boton = document.getElementById("btnProyectos");
const lista = document.getElementById("listaProyectos");

// Saludo segun la hora del dia
const horaActual = new Date().getHours();

let mensaje;
    if (horaActual < 12) {
        mensaje = "¡Buenos días! Bienvenido a mi portafolio☀️.";
        } else if (horaActual < 19) {
        mensaje = "¡Buenas tardes! Bienvenido a mi portafolio 🌤️.";
        } else {
        mensaje = "¡Buenas noches! Bienvenido a mi portafolio 🌙.";
        }
        document.getElementById("saludo").textContent = mensaje;

lista.style.opacity = "1";
lista.style.transition = "opacity 0.3s ease";

boton.addEventListener("click", () => {
    const estaOculto = lista.classList.contains("oculto");

    if (estaOculto) {
        lista.classList.remove("oculto");
        setTimeout(() => {
            lista.style.opacity = "1";
        }, 10);
        boton.textContent = "Ocultar proyectos";
    } else {
        lista.style.opacity = "0";
        setTimeout(() => {
            lista.classList.add("oculto");
        }, 300);
        boton.textContent = "Mostrar Proyectos";
    }
});
