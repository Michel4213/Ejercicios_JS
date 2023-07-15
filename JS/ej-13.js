
let datos = document.getElementById("datos");

window.onload = function () {
    const nombreUsuario = () => {
        let nombre = prompt("Nombre por favor");
        alert(nombre)
        console.log(nombre)
    }


    const datos = document.getElementById("datos")
    console.log(datos)

    datos.onclick = function () {
        nombreUsuario();
    }
};