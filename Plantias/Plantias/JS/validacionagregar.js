function validarFormulario() {
    // Limpiar mensajes de error
    document.getElementById("errorNombre").innerText = "";
    document.getElementById("errorCodigo").innerText = "";
    document.getElementById("errorPrecio").innerText = "";
    document.getElementById("errorTipoProducto").innerText = "";

    // Obtener valores de los campos
    var nombre = document.getElementById("txtNombre").value.trim();
    var codigo = document.getElementById("Codigo").value.trim();
    var precio = document.getElementById("Precio").value.trim();
    var tipoProducto = document.getElementById("tipoProducto").value;

    // Validar campos
    if (nombre === "") {
        document.getElementById("errorNombre").innerText = "Por favor, ingrese el nombre del producto.";
        return false;
    }

    if (codigo === "") {
        document.getElementById("errorCodigo").innerText = "Por favor, ingrese el código del producto.";
        return false;
    }

    if (precio === "") {
        document.getElementById("errorPrecio").innerText = "Por favor, ingrese el precio del producto.";
        return false;
    }

    if (tipoProducto === "0") {
        document.getElementById("errorTipoProducto").innerText = "Por favor, seleccione un tipo de producto.";
        return false;
    }

    return true;
}