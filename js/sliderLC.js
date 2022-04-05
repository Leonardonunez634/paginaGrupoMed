const slider = document.querySelector(".contenedor-cartas"); /* selecciono el area de mi slider */
let sliderSection = document.querySelectorAll(".slider-carta");/*Tengo todas los slides*/
let sliderSectionLast = sliderSection[sliderSection.length - 1]; /*Tengo el ultimo elemento*/
console.log("coneccion exitosa");
const botonSiguiente = document.querySelector(".botton-siguiente");
const botonAnterior = document.querySelector(".botton-anterior");


slider.insertAdjacentElement("afterbegin" , sliderSectionLast);

function siguiente(){
    console.log("funcioon sig");
    let sliderSectionFirst = document.querySelectorAll(".contenedor-cartas")[0];
    slider.style.marginLeft = "-300px";
    slider.style.transition = "0.5s";

    setTimeout(function(){
        slider.style.transition("none");
        slider.insertAdjacentElement("beforeend" , sliderSectionFirst);
        slider.style.marginLeft="-150px";
    });
}

function anterior(){
    console.log("funcioon ant");
    let sliderSectionLast = sliderSection[sliderSection.length - 1]
    slider.style.marginLeft = "0px";
    slider.style.transition = "0.5s";

    setTimeout(function(){
        slider.style.transition("none");
        slider.insertAdjacentElement("afterbegin" , sliderSectionLast);
        slider.style.marginLeft="-150px";
    });
}

botonSiguiente.addEventListener('click' , function(){
    siguiente();
});

botonAnterior.addEventListener('click' , function(){
    anterior();
});