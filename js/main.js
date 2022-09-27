let resultado = 0;
let resultadoAux = 0;
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


//Funcion calculo por producto.
function calcular(art) {
    let cantidad;
    let resultadocalcular;
    switch (art) {
        case "Agenda":
            Producto1.mostrarPrecio();
            cantidad = prompt("Ingrese la cantidad que desea");
            resultadocalcular = parseInt(cantidad) * Producto1.precio;
            break;
        case "Lapicera":
            Producto2.mostrarPrecio();
            cantidad = prompt("Ingrese la cantidad que desea");
            resultadocalcular = parseInt(cantidad) * Producto2.precio;
            break;
        case "Cuaderno":
            Producto3.mostrarPrecio();
            cantidad = prompt("Ingrese la cantidad que desea");
            resultadocalcular = parseInt(cantidad) * Producto3.precio;
            break;
        default:
            resultado = 0;
            alert("NO HA INGRESA UN ARTICULO VALIDO")
            break;
    }
    return (resultadocalcular);
}
//Función suma.
function suma(numeroA, numeroB) {
    return (numeroA + numeroB);
}

//Variables usadas
const cliente1 = new cliente(prompt("¿Cómo te llamas?"), prompt("¿Que edad tenés?"), prompt("¿Dirección de envio?"));
//console.log(cliente1);
alert("Hola " + cliente1.nombre + "!");
alert("En cual de los artículos estás interesado " + cliente1.nombre + "?" + "\n" + "Podés elegir: " + "\n" + "-Agenda\n -Cuaderno\n -Lapicera");
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
alert("Muchas gracias por tu compra" + NombreCliente + ",te esperamos!");