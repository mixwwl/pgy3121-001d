function validarFormulario() {
    // Limpiar mensajes de error
    document.getElementById("errorNombre").innerText = "";
    document.getElementById("errorDescripcion").innerText = "";
    document.getElementById("errorPrecio").innerText = "";
    document.getElementById("errorImagen").innerText = "";

    // Obtener valores de los campos
    var nombre = document.getElementById("nombre").value.trim();
    var descripcion = document.getElementById("descripcion").value.trim();
    var precio = document.getElementById("precio").value.trim();
    var imagen = document.getElementById("imagen").value.trim();

    // Validar campos
    if (nombre === "") {
        document.getElementById("errorNombre").innerText = "Por favor, ingrese el nombre del producto.";
        return false;
    }

    if (descripcion === "") {
        document.getElementById("errorDescripcion").innerText = "Por favor, ingrese la descripción del producto.";
        return false;
    }

    if (precio === "") {
        document.getElementById("errorPrecio").innerText = "Por favor, ingrese el precio del producto.";
        return false;
    }

    if (isNaN(parseFloat(precio))) {
        document.getElementById("errorPrecio").innerText = "Por favor, ingrese un valor numérico para el precio.";
        return false;
    }

    if (imagen === "") {
        document.getElementById("errorImagen").innerText = "Por favor, ingrese la URL de la imagen del producto.";
        return false;
    }

    return true;
}