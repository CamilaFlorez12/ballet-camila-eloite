document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    if (formulario){
        formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const datos = new FormData(formulario);
        const nombre = datos.get("nombre");
    });
    }
});
const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje-form");
if(form&&mensaje){
    form.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const asunto = document.getElementById("asunto").value.trim();
        if (!nombre || !correo || !telefono || !asunto) {
            alertaMensaje("Por favor completa todos los campos", "error");
            return;
        }
        alertaMensaje("¡Mensaje, enviado!!", "enviado");
        form.reset();
    });

    function alertaMensaje(texto, tipo) {
        mensaje.textContent = texto;
        mensaje.className = `mensaje-form ${tipo}`;

        setTimeout(() => {
            mensaje.textContent = "";
            mensaje.className = "mensaje-form";
        }, 2000);
    }
}