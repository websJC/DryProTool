const ayudas = [
    { nom: "MEDIO BRAZO", helpCirc: "¿Cuánto mide la circunferencia del antebrazo 4 centímetros por encima de la escayola?", helpLargo: "Medida del largo" },
    { nom: "MEDIA PIERNA", helpCirc: "¿Cuánto mide la circunferencia del gemelo 4 centímetros por encima de la escayola?", helpLargo: "Cuanto mide des del talón hasta el final de la escayola?" },
    { nom: "BRAZO COMPLETO", helpCirc: "¿Cuánto te mide la circunferencia del bíceps?", helpLargo: "Medida del largo" },
    { nom: "PIERNA COMPLETA", helpCirc: "¿Cuánto mide la circunferencia 4 centímetros por encima de la escayola?", helpLargo: "Cuanto mide des del talón hasta el final de la escayola?" },
    { nom: "PICC", helpCirc: "¿Cuánto mide la circunferencia de la parte superior del antebrazo?", helpLargo: "¿Cuánto mide la circunferencia de la parte inferior del bíceps?" },
    { nom: "OSTOMIA", helpCirc: "¿Cuánto mide la circunferencia de tu cintura a la altura de la colostomía?", helpLargo: "Medida del largo" },
];
const muestrasResultados = [
    //Pierna Entera
    { nom: "PIERNA COMPLETA", valor: "PEXS", Talla: "Extra Small", Modelo: "FL-12", min: 19.1, max: 27.9, largo: 48.3, Enlace: "https://www.drypro.es/funda-pierna/" },
    { nom: "PIERNA COMPLETA", valor: "PES", Talla: "Small", Modelo: "FL-14", min: 35.6, max: 41.9, largo: 73.7, Enlace: "https://www.drypro.es/funda-pierna/" },
    { nom: "PIERNA COMPLETA", valor: "PEM", Talla: "Medium", Modelo: "FL-16", min: 42, max: 53.3, largo: 83.8, Enlace: "https://www.drypro.es/funda-pierna/" },
    { nom: "PIERNA COMPLETA", valor: "PEL", Talla: "Large", Modelo: "FL-18", min: 53.4, max: 100, largo: 94, Enlace: "https://www.drypro.es/funda-pierna/" },
    //Brazo Entero
    { nom: "BRAZO COMPLETO", valor: "BEXS", Talla: "Extra Small", Modelo: "FA-12", min: 15.2, max: 17.5, largo: 40, Enlace: "https://www.drypro.es/funda-brazo/" },
    { nom: "BRAZO COMPLETO", valor: "BES", Talla: "Small", Modelo: "FA-14", min: 17.6, max: 22.5, largo: 58, Enlace: "https://www.drypro.es/funda-brazo/" },
    { nom: "BRAZO COMPLETO", valor: "BEM", Talla: "Medium", Modelo: "FA-16", min: 22.6, max: 25.5, largo: 71, Enlace: "https://www.drypro.es/funda-brazo/" },
    { nom: "BRAZO COMPLETO", valor: "BEL", Talla: "Large", Modelo: "FA-18", min: 25.6, max: 100, largo: 83, Enlace: "https://www.drypro.es/funda-brazo/" },
    //Medio Brazo
    { nom: "MEDIO BRAZO", valor: "MBS", Talla: "Small", Modelo: "HA-13", min: 19.7, max: 25.4, largo: 40, Enlace: "https://www.drypro.es/funda-brazo/" },
    { nom: "MEDIO BRAZO", valor: "MBL", Talla: "Large", Modelo: "HA-15", min: 25.5, max: 29.4, largo: 58, Enlace: "https://www.drypro.es/funda-brazo/" },
    //Media Pierna
    { nom: "MEDIA PIERNA", valor: "MPS", Talla: "Small", Modelo: "HL-13", min: 25.4, max: 33, largo: 53.3, Enlace: "https://www.drypro.es/funda-pierna/" },
    { nom: "MEDIA PIERNA", valor: "MPL", Talla: "Large", Modelo: "HL-17", min: 33.1, max: 41.6, largo: 59.7, Enlace: "https://www.drypro.es/funda-pierna/" },
    //PICC
    { nom: "PICC", valor: "PXS", Talla: "Extra Small", Modelo: "PIC-11", circInfMin: 14, circInfMax: 20, min: 15, max: 23, Enlace: "https://www.drypro.es/picc/" },
    { nom: "PICC", valor: "PS", Talla: "Small", Modelo: "PIC13", circInfMin: 15, circInfMax: 23, min: 24, max: 28, Enlace: "https://www.drypro.es/picc/" },
    { nom: "PICC", valor: "PM", Talla: "Medium", Modelo: "PIC15", circInfMin: 18, circInfMax: 28, min: 28, max: 33, Enlace: "https://www.drypro.es/picc/" },
    { nom: "PICC", valor: "PL", Talla: "Large", Modelo: "PIC17", circInfMin: 23, circInfMax: 26, min: 33, max: 38, Enlace: "https://www.drypro.es/picc/" },
    { nom: "PICC", valor: "PXL", Talla: "Extra Large", Modelo: "PIC-19", circInfMin: 0, circInfMax: 0, min: 38, max: 45, Enlace: "https://www.drypro.es/picc/" },
    //OSTOMIA
    { nom: "OSTOMIA", valor: "OXS", Talla: "Extra Small", Modelo: "OS-12", min: 66.04, max: 76.2, Enlace: "https://www.drypro.es/ostomia/" },
    { nom: "OSTOMIA", valor: "OS", Talla: "Small", Modelo: "OS-14", min: 76.2, max: 86.36, Enlace: "https://www.drypro.es/ostomia/" },
    { nom: "OSTOMIA", valor: "OM", Talla: "Medium", Modelo: "OS-16", min: 86.36, max: 96.52, Enlace: "https://www.drypro.es/ostomia/" },
    { nom: "OSTOMIA", valor: "OL", Talla: "Large", Modelo: "OS-18", min: 96.52, max: 106.68, Enlace: "https://www.drypro.es/ostomia/" },
    { nom: "OSTOMIA", valor: "OXL", Talla: "Extra Large", Modelo: "OS-20", min: 106.68, max: 116.84, Enlace: "https://www.drypro.es/ostomia/" },
];
botoneraRadio = () => {
    document.getElementById('previas').setAttribute("style", "display:none");
    document.querySelector('label[for="brazoCompleto"]').setAttribute("style", "display:none;");
    document.querySelector('label[for="medioBrazo"]').setAttribute("style", "display:none;");
    document.querySelector('label[for="piernaCompleta"]').setAttribute("style", "display:none;");
    document.querySelector('label[for="mediaPierna"]').setAttribute("style", "display:none;");
    rad = document.formulario.tipoProducto;
    for (let i = 0; i < rad.length; i++) {
        rad[i].addEventListener('change', primerPaso);
    };
    radPrevia = document.formulario.tipoProductoPrev;
    for (let j = 0; j < radPrevia.length; j++) {
        radPrevia[j].addEventListener('change', primerPasoPrevia);
    };
};
primerPasoPrevia = () => {
    document.getElementById('inicial').setAttribute("style", "display:none");
    document.getElementById('previas').setAttribute("style", "display:block");
    let valorPrevia = document.formulario.tipoProductoPrev.value;
    if (valorPrevia == "BRAZO") {
        document.getElementById('inicial').setAttribute("style", "display:none");
        document.querySelector('label[for="brazoCompleto"]').setAttribute("style", "display:block;");
        document.querySelector('label[for="medioBrazo"]').setAttribute("style", "display:block;");
    } else {
        document.getElementById('inicial').setAttribute("style", "display:none");
        document.querySelector('label[for="piernaCompleta"]').setAttribute("style", "display:block;");
        document.querySelector('label[for="mediaPierna"]').setAttribute("style", "display:block;");
    }
};
var rad, radPrevia;

window.addEventListener("load", function() {
    botoneraRadio();
    document.getElementById('segundoPaso').setAttribute("style", "display:none");
    document.getElementById('enviar').addEventListener("click", validarFormulario);
    document.getElementById('borrar').addEventListener("click", recargar);
    document.getElementById('borrar').setAttribute("style", "display:none");
});

function buscarindices(nombre) {
    let index;
    let muestraIndice, muestraFinal;
    for (let i = 0, len = muestrasResultados.length; i < len; i++) {
        if (muestrasResultados[i].nom === nombre) {
            muestraIndice = muestrasResultados[i].min;
            index = i;
            break;
        }
    }
    let contador = index;
    for (let j = 0, len = muestrasResultados.length; j < len; j++) {
        if (muestrasResultados[j].nom === nombre) {
            muestraFinal = muestrasResultados[j].max;
            contador++;
        }
    }
    let resultado = "Desde:" + muestraIndice + "la talla más pequeña<br>Hasta:" + muestraFinal + "cms la talla más grande del producto: " + nombre + "<br>";
    return resultado;
};

function recargar() {
    location.reload(true);
}

buscaAyudaCircunferencia = (radioSeleccionado) => {
    for (let i = 0; i < ayudas.length; i++) {
        if (ayudas[i].nom == radioSeleccionado) {
            document.getElementById('ayudaCircunferencia').innerHTML = ayudas[i].helpCirc;
            document.getElementById('ayudaLargo').innerHTML = ayudas[i].helpLargo;
        }
    }
};

function primerPaso(e) {
    e = e || window.event;
    e.preventDefault();
    document.getElementById('segundoPaso').setAttribute("style", "display:block");
    var formulario = document.formulario;
    var radioSeleccionado = "";
    for (let i = 0; i < formulario.tipoProducto.length; i++) {
        if (formulario.tipoProducto[i].checked) {
            document.getElementById("errores").innerHTML = "";
            radioSeleccionado = formulario.tipoProducto[i].value;
            document.getElementById('borrar').setAttribute("style", "display:block");
            document.getElementById('borrar').addEventListener("click", recargar);
            document.getElementById('previaProducto2').innerHTML = `Funda para ${radioSeleccionado}`;
            let indices = buscarindices(radioSeleccionado);
            document.getElementById('ayudaCircunferencia').innerHTML = "";
            document.getElementById('ayudaLargo').innerHTML = "";
            let ayudaCircunferencia = buscaAyudaCircunferencia(radioSeleccionado);
            //let ayudaLargo = buscaAyudaLargo(radioSeleccionado);
            document.getElementById('inicial').setAttribute("style", "display:none");
            document.getElementById('previas').setAttribute("style", "display:none");
            document.getElementById('segundoPaso').classList.add("mostrar");
            break;
        } else {
            document.getElementById("errores").innerHTML = "Debes seleccionar algún producto";
        }
    };
};

function validarFormulario(e) {
    if (window.formulario.circSup.value == "" || !Number(window.formulario.circSup.value)) {
        e.preventDefault();
        document.getElementById("errores").innerHTML = "Debes rellenar el diametro superior";
        document.getElementById("circSup").focus();
        document.getElementById("circSup").setAttribute("style", "color:red;");
    } else {
        e.preventDefault();
        let radios = document.formulario;
        let radiosSeleccionado = "";
        for (let i = 0; i < radios.tipoProducto.length; i++) {
            if (radios.tipoProducto[i].checked) {
                var nombre = radios.tipoProducto[i].value;
            }
        };
        document.getElementById('segundoPaso').setAttribute("style", "display:none");
        if (nombre == "PICC") {
            let largo = 0;
            let circSup = window.formulario.circSup.value;
            largo = window.formulario.largo.value;
            for (let i = 0; i < muestrasResultados.length; i++) {
                if (muestrasResultados[i].nom == nombre) {
                    if (muestrasResultados[i].min <= circSup) {
                        if (muestrasResultados[i].max >= circSup) {
                            document.getElementById('resultados').innerHTML = "<h2>LA TALLA QUE NECESITAS ES</h2><div class='resultat'><h2>" + muestrasResultados[i].nom + " - " + muestrasResultados[i].Talla + "</h2><br><a class='boton-comprar' target='_blank' href='" + muestrasResultados[i].Enlace + "'>Comprar</a></p></div>";
                        } else {
                            console.log("max no encontrado");
                            console.log(circSup);
                        }
                    } else {
                        console.log("min no encontrado");
                        console.log(circSup);
                    }
                } else {
                    console.log("producto no encontrado");
                    console.log(nombre);
                }
            }
        } else {
            let largo = 0;
            largo = window.formulario.largo.value;
            let circSup = window.formulario.circSup.value;
            for (let i = 0; i < muestrasResultados.length; i++) {
                if (muestrasResultados[i].nom == nombre) {
                    if (muestrasResultados[i].min <= circSup) {
                        if (muestrasResultados[i].max >= circSup) {
                            console.log(muestrasResultados[i]);
                            document.getElementById('resultados').innerHTML = "<h2>LA TALLA QUE NECESITAS ES</h2><div class='resultat'><h2>" + muestrasResultados[i].nom + " - " + muestrasResultados[i].Talla + "</h2><br><a class='boton-comprar' target='_blank' href='" + muestrasResultados[i].Enlace + "'>Comprar</a></p></div>";
                            //si fuera picc tendríamos mas datos y existiría
                        } else {
                            console.log("max no encontrado");
                            console.log(circSup);
                        }
                    } else {
                        console.log("min no encontrado");
                        console.log(circSup);
                    }
                } else {
                    console.log("producto no encontrado");
                    console.log(nombre);
                }
            }
        }
    }
};