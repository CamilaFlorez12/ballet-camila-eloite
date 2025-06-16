const boton=document.querySelector('.boton-inicio');
boton.style.transition='transform 0.3s ease'
boton.addEventListener("mouseover",()=>{
    boton.style.transform='scale(1.05)';
})
boton.addEventListener("mouseout",()=>{
    boton.style.transform='scale(1)';
})

