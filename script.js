/*==================================================
                PANTALLA DE CARGA
==================================================*/

window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    setTimeout(function(){

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    },1500);

});


/*==================================================
                BOTÓN DE MÚSICA
==================================================*/

const btnMusic = document.getElementById("btnMusic");

const audio = document.getElementById("audio");

let reproduciendo = false;

btnMusic.addEventListener("click",function(){

    if(!reproduciendo){

        audio.play();

        btnMusic.innerHTML = `
        <i class="fa-solid fa-pause"></i>
        Pausar Música`;

        reproduciendo = true;

    }

    else{

        audio.pause();

        btnMusic.innerHTML = `
        <i class="fa-solid fa-music"></i>
        Reproducir Música`;

        reproduciendo = false;

    }

});


/*==================================================
            BOTÓN VOLVER ARRIBA
==================================================*/

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll",function(){

    if(window.scrollY > 350){

        btnTop.style.display = "block";

    }

    else{

        btnTop.style.display = "none";

    }

});

btnTop.addEventListener("click",function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==================================================
                LIGHTBOX
==================================================*/

const fotos = document.querySelectorAll(".foto img");

const lightbox = document.getElementById("lightbox");

const imagenGrande = document.getElementById("imagenGrande");

const cerrar = document.getElementById("cerrar");

fotos.forEach(function(foto){

    foto.addEventListener("click",function(){

        lightbox.style.display="flex";

        imagenGrande.src = this.src;

    });

});

cerrar.addEventListener("click",function(){

    lightbox.style.display="none";

});

lightbox.addEventListener("click",function(e){

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});


/*==================================================
            EFECTO SCROLL
==================================================*/

const elementos = document.querySelectorAll(

".carta,.frase,.galeria,.video,.mensajeFinal"

);

const mostrarElementos = ()=>{

    elementos.forEach((elemento)=>{

        const posicion = elemento.getBoundingClientRect().top;

        const pantalla = window.innerHeight;

        if(posicion < pantalla-120){

            elemento.style.opacity="1";

            elemento.style.transform="translateY(0px)";

        }

    });

};

elementos.forEach((elemento)=>{

    elemento.style.opacity="0";

    elemento.style.transform="translateY(70px)";

    elemento.style.transition="1s";

});

window.addEventListener("scroll",mostrarElementos);

mostrarElementos();


/*==================================================
            EFECTOS BOTONES
==================================================*/

const botones = document.querySelectorAll(

".btnPrincipal,.btnVideo,#btnMusic"

);

botones.forEach((boton)=>{

    boton.addEventListener("mouseenter",()=>{

        boton.style.transform="scale(1.08)";

    });

    boton.addEventListener("mouseleave",()=>{

        boton.style.transform="scale(1)";

    });

});


/*==================================================
                FIN PARTE 1
==================================================*/
/*==================================================
            EFECTO MÁQUINA DE ESCRIBIR
==================================================*/

const texto = document.getElementById("textoEscritura");

if(texto){

    const contenido = texto.innerText;

    texto.innerHTML = "";

    let i = 0;

    function escribir(){

        if(i < contenido.length){

            texto.innerHTML += contenido.charAt(i);

            i++;

            setTimeout(escribir,40);

        }

    }

    setTimeout(escribir,1800);

}


/*==================================================
            EFECTO FLOTANTE
==================================================*/

const tarjetas = document.querySelectorAll(

".carta,.video,.mensajeFinal"

);

tarjetas.forEach((tarjeta)=>{

    tarjeta.addEventListener("mouseenter",()=>{

        tarjeta.style.transform="translateY(-8px)";

        tarjeta.style.transition=".4s";

    });

    tarjeta.addEventListener("mouseleave",()=>{

        tarjeta.style.transform="translateY(0px)";

    });

});


/*==================================================
            EFECTO EN LAS IMÁGENES
==================================================*/

const imagenes = document.querySelectorAll(".foto img");

imagenes.forEach((imagen)=>{

    imagen.addEventListener("mouseenter",()=>{

        imagen.style.filter="brightness(115%)";

    });

    imagen.addEventListener("mouseleave",()=>{

        imagen.style.filter="brightness(100%)";

    });

});


/*==================================================
            EFECTO PARALLAX HERO
==================================================*/

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    const scroll = window.scrollY;

    hero.style.backgroundPositionY = scroll * 0.4 + "px";

});


/*==================================================
        SCROLL SUAVE PARA BOTONES
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach((ancla)=>{

    ancla.addEventListener("click",(e)=>{

        e.preventDefault();

        const destino = document.querySelector(

            ancla.getAttribute("href")

        );

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==================================================
        ANIMACIÓN DEL CORAZÓN
==================================================*/

const corazon = document.querySelector(".corazon");

setInterval(()=>{

    corazon.style.transform="scale(1.2)";

    setTimeout(()=>{

        corazon.style.transform="scale(1)";

    },500);

},1200);


/*==================================================
        EFECTO DE BRILLO EN EL TÍTULO
==================================================*/

const titulo = document.querySelector(".hero h1");

let brillo = true;

setInterval(()=>{

    if(brillo){

        titulo.style.textShadow="0 0 30px #7b2cff";

    }else{

        titulo.style.textShadow="0 0 30px #2d7dff";

    }

    brillo = !brillo;

},900);


/*==================================================
            MENSAJE EN CONSOLA
==================================================*/

console.log(

"%c💜 Feliz Día de la Amistad 💜",

"font-size:22px;color:#7b2cff;font-weight:bold;"

);


/*==================================================
                FIN DEL SCRIPT
==================================================*/