let boton = document.getElementById("contactar");
boton.addEventListener("click", tomarDatosc);

//PRESUPUESTO
function tomarDatosc(e) {
    e.preventDefault() //Evita comportamiento normal

    let nombre = document.getElementById("nombre1").value;
    let correo = document.getElementById("Email1").value;
    let telefonoc = document.getElementById("phone").value;


    alert("Nos prondremos en contacto a la brevedad con vos " + nombre + "! Muchas gracias.");



    // alert("El total es " + cuenta);

}