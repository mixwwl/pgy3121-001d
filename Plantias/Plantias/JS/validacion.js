// Asegúrate de que jQuery esté cargado antes de usarlo
if (typeof jQuery === 'undefined') {
    throw new Error('jQuery is not defined. Please make sure it is included before this script.');
}

var $ = jQuery; // Puedes usar '$' en lugar de 'E' o 'jQuery'

$(document).ready(function () {
    $("#miFormulario").submit(function (event) {
        // Evitar el envío del formulario por defecto
        event.preventDefault();

        // Limpiar mensajes de error
        $(".error").text("");

        // Validar el nombre
        var nombre = $("#nombre").val();
        if (nombre.length === 0) {
            $("#errorNombre").text("Por favor, ingresa tu nombre.");
            console.log("nombre:", nombre);
        } else if (!isValidNombre(nombre)) {
            $("#errorNombre").text("Ingresa un nombre válido.");

        }

        var apellido = $("#Apellido").val();
        if (apellido.length === 0) {
            $("#errorapellido").text("Por favor, ingresa tu Apellido.");
            console.log("Apellido:", apellido);
        } else if (!isValidApellido(apellido)) {
            $("#errorapellido").text("Ingresa un Apellido válido.");
        }

        var user = $("#User").val();
        if (user.length === 0) {
            $("#erroruser").text("Por favor, ingresa tu Usuario.");
            console.log("Usuario:", user);
        } else if (!isValidUser(user)) {
            $("#erroruser").text("Ingresa un Usuario válido.");
        }



        // Validar el email
        var email = $("#email").val();
        if (email.length === 0) {
            $("#errorEmail").text("Por favor, ingresa tu correo electrónico.");
        } else if (!isValidEmail(email)) {
            $("#errorEmail").text("Ingresa un correo electrónico válido.");
        }

        // Si no hay errores, puedes enviar el formulario
        if ($(".error").text() === "") {
            // Aquí puedes realizar el envío del formulario o realizar otras acciones necesarias
            alert("Formulario enviado correctamente.");
        } else {
            // Muestra un mensaje si no se pudo enviar el formulario
            alert("No se pudo enviar el formulario. Por favor, corrige los errores.");
        }
    });

    // Función para validar el formato de correo electrónico
    function isValidEmail(email) {
        var emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    function isValidNombre(nombre) {
        // Permitir solo letras y espacios, al menos 2 caracteres
        var nomRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]{2,}$/;
        return nomRegex.test(nombre);
    }
    
    function isValidApellido(apellido) {
        // Permitir solo letras y espacios, al menos 2 caracteres
        var apeRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]{2,}$/;
        return apeRegex.test(apellido);
    }
    
    function isValidUser(user) {
        // Permitir letras, números y guiones bajos, al menos 4 caracteres
        var userRegex = /^[a-zA-Z0-9_]{4,}$/;
        return userRegex.test(user);
    }
    



});