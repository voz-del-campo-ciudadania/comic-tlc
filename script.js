const paginas = document.querySelectorAll(".pagina");

const siguiente = document.getElementById("siguiente");

const anterior = document.getElementById("anterior");

let paginaActual = 1;

/* ========================= */
/* BOTON INICIAR */
/* ========================= */

const iniciarHistoria = document.getElementById("iniciarHistoria");

iniciarHistoria.addEventListener("click", ()=>{

    paginas[0].classList.remove("active");

    paginaActual = 1;

    paginas[1].classList.add("active");

});

/* MOSTRAR PAGINA */

function mostrarPagina(indice){

    paginas.forEach((pagina)=>{

        pagina.classList.remove("active");

    });

    paginas[indice].classList.add("active");
}

/* SIGUIENTE */

siguiente.addEventListener("click", ()=>{

    paginaActual++;

    if(paginaActual >= paginas.length){

        paginaActual = paginas.length -1;
    }

    mostrarPagina(paginaActual);
});

/* ANTERIOR */

anterior.addEventListener("click", ()=>{

    paginaActual--;

    if(paginaActual < 0){

        paginaActual = 0;
    }

    mostrarPagina(paginaActual);
});


