let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");

switch (edad) {
    case "18":
        alert(nombre+", tienes acceso a la disco")
        break;
    case "17":
        alert(nombre+", te falta un año para acceder a la disco")
        break;
    default:
        alert(nombre+", no pudimos validar tu edad")
        break;
}

switch (nombre) {
    case "Michel":
        console.log("Michel tiene 17 años y vive en Bogotá")
        break;
    case "Ryuk":
        console.log("Como se registro un perro en la pagina?")
        break;
    case "Sucio Dan":
        console.log("Criminal buscado en mas de 72 paises por los crimenes de [REDACTED]")
        break;
    case "Juan":
        console.log("Juan :D")
        break;
    case "Si":
        console.log("No >:(")
        break;
    default:
        console.log("No se posee informacion del sujeto")
        break;
}