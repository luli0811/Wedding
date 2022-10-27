let cuenta = 0;

function borrarDatos() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefonoc").value = "";
    document.getElementById("provincia").value = "";
    document.getElementById("Ciud").value = "";
    document.getElementById("tamañohojas").value = "";
    document.getElementById("cantidadhojasbn").value = "";
    document.getElementById("cantidadhojascolor").value = "";
    document.getElementById("customRadio1").value = "";
    document.getElementById("customRadio2").value = "";
    document.getElementById("customRadio3").value = "";
    document.getElementById("customRadio4").value = "";
};

let boton = document.getElementById("calcular-monto");
console.log(boton);
boton.addEventListener("click", tomarDatos);

//PRESUPUESTO
function tomarDatos(e) {
    e.preventDefault() //Evita comportamiento normal
    console.log("Hola");
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let telefonoc = document.getElementById("phone").value;
    let prov = document.getElementById("provincia").value;
    let ciudad = document.getElementById("ciud").value;
    let tamaño = document.getElementById("tamañohojas").value;
    let cantidadhjbn = document.getElementById("cantidadhojasbn").value;
    let cantidadhjcolor = document.getElementById("cantidadhojascolor").value;
    let gruesa = document.getElementById("customRadio1").checked;
    let fino = document.getElementById("customRadio2").checked;
    let brillo = document.getElementById("customRadio3").checked;
    let mate = document.getElementById("customRadio4").checked;

    if (nombre != "" && apellido != "" && correo != "" && telefonoc != "" && prov != "" && ciudad != "" && tamaño != "" && cantidadhjbn != "" && cantidadhjcolor != "") {

        if (tamaño == "A4") {
            if (gruesa) {
                cuenta = parseInt(cantidadhjbn) * 2 + parseInt(cantidadhjcolor) * 5;
            } else {
                if (fino) {
                    cuenta = parseInt(cantidadhjbn) * 1 + parseInt(cantidadhjcolor) * 2.5;
                }
            }
            if (brillo) {
                cuenta = cuenta + 100;
            }
        }

        if (tamaño == "A3") {
            if (gruesa) {
                cuenta = parseInt(cantidadhjbn) * 4 + parseInt(cantidadhjcolor) * 6;
            } else {
                if (fino) {
                    cuenta = parseInt(cantidadhjbn) * 2 + parseInt(cantidadhjcolor) * 3;
                }
            }
            if (brillo) {
                cuenta = cuenta + 200;
            }
        }


        if (tamaño == "A5") {
            if (gruesa) {
                cuenta = parseInt(cantidadhjbn) * 1 + parseInt(cantidadhjcolor) * 2.5;
            } else {
                if (fino) {
                    cuenta = parseInt(cantidadhjbn) * 0.5 + parseInt(cantidadhjcolor) * 1.25;
                }
            }
            if (brillo) {
                cuenta = cuenta + 90;
            }
        }
        if (tamaño == "Oficio") {
            if (gruesa) {
                cuenta = parseInt(cantidadhjbn) * 2.5 + parseInt(cantidadhjcolor) * 5.5;
            } else {
                if (fino) {
                    cuenta = parseInt(cantidadhjbn) * 1.25 + parseInt(cantidadhjcolor) * 2.25;
                }
            }
            if (brillo) {
                cuenta = cuenta + 130;
            }
        }
        let elementoSection = document.createElement("section");
        elementoSection.classList.add('devolucion-presupuesto-1')

        let plantilla = `<p> El total aproximado de su impresión/fotocopiado sería: ${cuenta}. Muchas gracias por tenernos en cuenta. 
                     </p>
                     <p> El presupuesto tiene una validez de 7 días hábiles</p>`;

        elementoSection.innerHTML = plantilla;

        const seccion = document.getElementById("devolucion-presupuesto");
        seccion.appendChild(elementoSection)


        // alert("El total es " + cuenta);
    } else {
        alert("Debe completar los campos obligatorios");
    }
}