let resultado = 0;
let resultadoAux = 0;
let carrito = [];

class cliente {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

}
class Producto {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
    mostrarPrecio() {
        alert("El producto " + this.nombre + " cuesta: $" + this.precio);
    }
}
const Producto1 = new Producto("Agenda", 4500, "001");
const Producto2 = new Producto("Lapicera", 100, "002");
const Producto3 = new Producto("Cuaderno", 1500, "003");

const Productos = [Producto1, Producto2, Producto3];
const Compras = [];

function preguntar(mensaje) {

}

//Funcion calculo por producto.
function calcular(art) {
    let cantidad;
    let resultadocalcular;
    let agregar;
    let busqueda = Productos.find(objetos => objetos.nombre == art)

    busqueda.mostrarPrecio();
    cantidad = prompt("Ingrese la cantidad que desea");
    resultadocalcular = parseInt(cantidad) * busqueda.precio;
    agregar = prompt("Este producto suma " + resultadocalcular + " deseas llevarlo? \n Presiona 1 para aceptar, \n Presioná 2 si no deseas agregar");
    if (agregar == 1) {
        let item = { cant: cantidad, prod: Producto1.nombre }
        carrito.push(item);
    }
    console.log(carrito);

    return (resultadocalcular);
}
//Función suma.
function suma(numeroA, numeroB) {
    return (numeroA + numeroB);
}

//Variables usadas
const cliente1 = new cliente(prompt("¿Cómo te llamas?"), prompt("¿Que edad tenés?"), prompt("¿Dirección de envio?"));

//console.log(cliente1);
Compras.push(cliente1);

alert("Hola " + cliente1.nombre + "! \nEn cual de los artículos estás interesado " + cliente1.nombre + "?" + "\n" + "Podés elegir: " + "\n" + "-Agenda\n -Cuaderno\n -Lapicera");
let Articulo = prompt("Ingrese uno de los artículos mencionados");

resultadoAux = calcular(Articulo);
resultado = suma(resultadoAux, resultado);

let condicion = prompt("Si quiere seleccionar otro articulo escriba la palabra OK");

//Condición loop
while (condicion == "OK") {

    alert("En que otro artículo estás interesado?" + "\n" + "Podés elegir: " + "\n" + "- Agenda \n -Cuaderno\n -Lapicera");
    let Articulo = prompt("Ingrese uno de los artículos mencionados");
    resultadoAux = calcular(Articulo);
    resultado = suma(resultadoAux, resultado);
    alert("Hasta acá llevas : " + resultado);
    condicion = prompt("Si quiere seleccionar otro articulo escriba la palabra OK.\n Si no presione un caracter aleatorio");

}

alert("El total de la compra es: " + resultado);

for (const Prod of carrito) {
    alert("Lleva " + Prod.cant + " unidades " + "del artículo " + Prod.prod)

}
alert("Muchas gracias por tu compra " + cliente1.nombre + ",te esperamos!");