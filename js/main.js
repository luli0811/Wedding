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
let seccion1 = document.getElementById('productoss');
for (const objeto of Productos) {
    let elementoSection1 = document.createElement("section");
    elementoSection1.classList.add('item');

    let plantilla1 = `<div class="foto-producto">
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


    console.log(seccion1);
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