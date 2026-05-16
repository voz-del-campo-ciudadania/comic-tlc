const botonIniciar = document.getElementById("iniciarHistoria");
const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");
const volverInicio = document.getElementById("volverInicio");
const paginas = document.querySelectorAll(".pagina");
const audio = document.getElementById("audioCampo");
const creditosFinal = document.querySelector(".creditos-final");
const reiniciarHistoria = document.getElementById("reiniciarHistoria");

let paginaActual = 0;

function mostrarPagina(index) {
    paginas.forEach(p => p.classList.remove("active"));
    paginas[index].classList.add("active");
}

/* INICIAR */
botonIniciar.addEventListener("click", () => {

    document.body.classList.remove("portada-activa");
    document.body.classList.add("historia-activa");

    paginaActual = 0;
    mostrarPagina(paginaActual);

    audio.volume = 0.4;
    audio.play();
});

/* SIGUIENTE */
siguiente.addEventListener("click", () => {
    if (paginaActual < paginas.length - 1) paginaActual++;
    mostrarPagina(paginaActual);
});

/* ANTERIOR */
anterior.addEventListener("click", () => {
    if (paginaActual > 0) paginaActual--;
    mostrarPagina(paginaActual);
});

reiniciarHistoria.addEventListener("click", () => {

    // OCULTAR CRÉDITOS
    document.body.classList.remove("creditos-activos");

    // MOSTRAR PORTADA
    document.body.classList.remove("historia-activa");
    document.body.classList.add("portada-activa");

    // REINICIAR PÁGINAS
    paginas.forEach(p => p.classList.remove("active"));

    paginaActual = 0;

    // REINICIAR AUDIO
    audio.pause();
    audio.currentTime = 0;
}); 
