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