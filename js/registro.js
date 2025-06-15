document.addEventListener('DOMContentLoaded', () => {
    const formRegistro = document.getElementById('inicio-form');
    const divregistro = document.getElementById('registro');
    const mensajeRegistro = document.getElementById('mensaje-registro');
    if (formRegistro && divregistro && mensajeRegistro) {
        formRegistro.addEventListener('submit', (evento) => {
            evento.preventDefault();
            console.log("formualrio enviado ")
            divregistro.style.displa='none';
            mensajeRegistro.classList.add('visible');
            formRegistro.reset();
        });
    }

});