let resultado = 0;
let resultadoAux = 0;
let carrito = [];
let Productosjs = [];

class Producto {
    constructor(obj) {
        this.id = parseInt(obj.id);
        this.nombre = obj.nombre;
        this.costo = parseFloat(obj.costo);
        this.imagen = obj.imagen;

    }
}

const Productos = [{
        id: 1,
        nombre: "Agenda cuaderno con hojas intercambiables1",
        costo: 4500,
        imagen: "../img/Agendas/cuadernoint1.jpg",
    },
    {
        id: 2,
        nombre: "Agenda cuaderno con hojas intercambiables2",
        costo: 4500,
        imagen: "../img/Agendas/cuadernoint6.jpg",
    }, {
        id: 3,
        nombre: "Agenda cuaderno con hojas intercambiables3",
        costo: 4900,
        imagen: "../img/Agendas/cuadernoint2.jpg",
    }, {
        id: 4,
        nombre: "Agenda cuaderno con hojas intercambiables4",
        costo: 5500,
        imagen: "../img/Agendas/cuadernoint3.jpg",
    }, {
        id: 5,
        nombre: "Agenda cuaderno con hojas intercambiables5",
        costo: 4500,
        imagen: "../img/Agendas/cuadernoint4.jpg",
    },

]

for (const objeto of Productos) {
    let elementoSection1 = document.createElement("section");
    elementoSection1.classList.add('item')

    let plantilla1 = `   <div class="foto-producto">
                        <img src="${objeto.imagen}" alt="agenda">
                        </div>
                        <div class="desc">
                        <div class="descripción">
                        <p class="lead">${objeto.nombre} </p>
                        </div>  
                        <div class="precio">
                        <span class="main-price">$${objeto.costo}</span>
                        </div> 
                        <div class="cantidadart">
                        <label for="exampleFormControlSelect1">Cantidad:</label>
                        <input type="text" id="cantidad${objeto.id}"  class="form-control" id="exampleFormControlInput1" placeholder="Número">
                        </div>
                        <div class="boton-compra">
                        <button type="button" class="btn btn-info" onclick="añadiralcarrito(${objeto.id},)" >Añadir al carrito</button>
                        </div>
                        </div>`;

    elementoSection1.innerHTML = plantilla1;

    let seccion1 = document.getElementById("productos");
    seccion1.appendChild(elementoSection1);
}


const Compras = [];

//Funcion calculo por producto.
function calcular(art, condicion) {
    let cantidad;
    let resultadocalcular = 0;
    let agregar;
    console.log(Productosjs)
    let busqueda = Productos.find(objetos => parseInt(objetos.id) == parseInt(art))

    if (!condicion) {
        if (busqueda != null) {
            // busqueda.mostrarPrecio();
            let algo = "cantidad" + art;
            cantidad = document.getElementById(algo).value;
            resultadocalcular = parseInt(cantidad) * busqueda.costo;
            agregar = confirm("Este producto suma " + resultadocalcular + " deseas llevarlo?");
            if (agregar) {
                let item = { cant: cantidad, prod: art }
                carrito.push(item);
            }

        } else {
            prompt("El artículo no existe")

        }
    }

    return (resultadocalcular);
}

//Función suma.
function suma(numeroA, numeroB) {
    return (numeroA + numeroB);
}
//Función resta.
function resta(numeroA, numeroB) {
    return (numeroA - numeroB);
}


//Funcion almarcenar
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaProductos", JSON.stringify(Productos));
const almacenados = JSON.parse(localStorage.getItem("listaProductos"))
for (objeto of almacenados) {
    Productosjs.push(new Producto(objeto))

}


//PRODUCTOS
function añadiralcarrito(articuloId) {
    if (sessionStorage.getItem("cliente") == null) {
        let nombreCliente = prompt("¿Cómo te llamas?");
        let edad = prompt("¿Que edad tenés?");
        let direccion = prompt("¿Dirección de envio?");
        if (nombreCliente != null) {
            sessionStorage.setItem("cliente", nombreCliente);
            sessionStorage.setItem("edad", edad);
            sessionStorage.setItem("direccion", direccion);

        }
    }
    let condicioncompra = false;
    let idArticulo = articuloId;
    resultadoAux = calcular(idArticulo, condicioncompra);
    resultado = suma(resultadoAux, resultado);

}

function concluirCompra() {
    alert("El total de la compra es: " + resultado);

    for (const Prod of carrito) {
        alert("Lleva " + Prod.cant + " unidades " + "del artículo " + Prod.prod)
    }
    alert("El envio se hará a:" + sessionStorage.getItem("direccion"))
    alert("Muchas gracias por tu compra " + sessionStorage.getItem("cliente") + ",te esperamos!");
    sessionStorage.clear();
}
let cuenta = 0;

//PRESUPUESTO
function tomarDatos() {
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
                     </p>`;

        elementoSection.innerHTML = plantilla;

        const seccion = document.getElementById("devolucion-presupuesto");
        seccion.appendChild(elementoSection)
            // mostrarResultado(cuenta);

        // alert("El total es " + cuenta);
    } else {
        alert("Debe completar los campos obligatorios");
    }
}
let boton = document.getElementById("calcular-monto");
boton.addEventListener("click", tomarDatos());

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