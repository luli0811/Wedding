let resultado = 0;
let resultadoAux = 0;
let carrito = [];
let Productosjs = [];
// class cliente {
//     constructor(nombre, edad, direccion) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.direccion = direccion;
//     }

// }
class Producto {
    constructor(obj) {
        this.nombre = obj.producto.toUpperCase();
        this.precio = parseFloat(obj.precio);
        this.id = parseInt(obj.id);
    }
    mostrarPrecio() {
        alert("El producto " + this.nombre + " cuesta: $" + this.precio);
    }
}
const Productos = [{ producto: "Agenda", precio: 4500, id: "001" },
    { producto: "Lapicera", precio: 100, id: "002" },
    { producto: "Cuaderno", precio: 1500, id: "003" }
];
// const Producto1 = new Producto("Agenda", 4500, "001");
// const Producto2 = new Producto("Lapicera", 100, "002");
// const Producto3 = new Producto("Cuaderno", 1500, "003");

//const Productos = [Producto1, Producto2, Producto3];
const Compras = [];

//Funcion calculo por producto.
function calcular(art, condicion) {
    let cantidad;
    let resultadocalcular = 0;
    let agregar;
    let busqueda = Productosjs.find(objetos => objetos.nombre == art)
    if (!condicion) {
        if (busqueda != null) {
            busqueda.mostrarPrecio();
            cantidad = prompt("Ingrese la cantidad que desea");
            resultadocalcular = parseInt(cantidad) * busqueda.precio;
            agregar = confirm("Este producto suma " + resultadocalcular + " deseas llevarlo?");
            if (agregar) {
                let item = { cant: cantidad, prod: art }
                carrito.push(item);
            }
            console.log(carrito);
        } else {
            prompt("El artículo no existe")

        }
    } else {
        for (const articulo of carrito) {
            if (articulo.prod == art) {
                resultadocalcular = articulo.cant * busqueda.precio;
                carrito = carrito.filter((item) => item.prod != art);
                console.log(carrito)
                alert("Se elimino el artículo");
            }

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


//Variables usadas
let nombreCliente = prompt("¿Cómo te llamas?");
let edad = prompt("¿Que edad tenés?");
let direccion = prompt("¿Dirección de envio?");
//const cliente1 = new cliente(prompt("¿Cómo te llamas?"), , );
if (nombreCliente != null) {
    sessionStorage.setItem("cliente", nombreCliente);
    sessionStorage.setItem("edad", edad);
    sessionStorage.setItem("direccion", direccion);

}
//console.log(cliente1);
//Compras.push(cliente1);

alert("Hola! \nEn cual de los artículos estás interesado " + sessionStorage.getItem("cliente") + "?" + "\n" + "Podés elegir: " + "\n" + "-Agenda\n -Cuaderno\n -Lapicera");
let Articulo = prompt("Ingrese uno de los artículos mencionados");
Articulo = Articulo.toUpperCase();
resultadoAux = calcular(Articulo, false);
resultado = suma(resultadoAux, resultado);

let condicion = confirm("Desea agregar más artículos?");

//Condición loop
while (condicion) {

    alert("En que otro artículo estás interesado?" + "\n" + "Podés elegir: " + "\n" + "- Agenda \n -Cuaderno\n -Lapicera");
    let Articulo = prompt("Ingrese uno de los artículos mencionados");
    resultadoAux = calcular(Articulo.toUpperCase());
    resultado = suma(resultadoAux, resultado);
    alert("Hasta acá llevas : " + resultado);
    condicion = confirm("Desea continuar agregando artículos?");

}

alert("El total de la compra es: " + resultado);

for (const Prod of carrito) {
    alert("Lleva " + Prod.cant + " unidades " + "del artículo " + Prod.prod)
}
let eliminar = confirm("¿Desea eliminar algún artículo de los mencionados?")
if (eliminar) {
    art = prompt("Que artículo queres eliminar?" + "\n" + "Podés elegir: " + "\n" + "- Agenda \n -Cuaderno\n -Lapicera")
    resultadoAux = calcular(art.toUpperCase(), eliminar);
    alert("Se resta del monto: " + resultadoAux);
    resultado = resta(resultado, resultadoAux);
    alert("El total de la compra es: " + resultado);
}
alert("El envio se hará a:" + sessionStorage.getItem("direccion"))
alert("Muchas gracias por tu compra " + sessionStorage.getItem("cliente") + ",te esperamos!");
localStorage.clear();

//PRESUPUESTO
function tomarDatos() {
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
        let cuenta = 0;
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
        alert("El total es " + cuenta);
    } else {
        alert("Debe completar los campos obligatorios");
    }
}

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


}

function calculo() {

}