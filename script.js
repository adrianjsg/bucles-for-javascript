function iniciarFor() {
    // Seleccionamos el elemento div donde mostraremos los números descendentes
    var divNumerosDescendentes = document.getElementById("numerosDescendentes");
    divNumerosDescendentes.innerHTML = ""; // Limpiamos el contenido del div antes de iniciar el bucle

    // Inicializamos la variable i en 50
    for (var i = 50; i >= 20; i--) {
        // Creamos un nuevo elemento de párrafo (p) para cada número y lo añadimos al div
        var parrafo = document.createElement("p");
        parrafo.textContent = i;
        divNumerosDescendentes.appendChild(parrafo);
    }
}

function numerosPares() {
    var inicio = parseInt(document.getElementById("numeroInicio").value);
    var fin = parseInt(document.getElementById("numeroFin").value);

    var divNumerosPares = document.getElementById("numerosPares");
    divNumerosPares.innerHTML = ""; // Limpiamos el contenido del div antes de mostrar los números

    for (var i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            var parrafo = document.createElement("p");
            parrafo.textContent = i;
            divNumerosPares.appendChild(parrafo);
        }
    }
}

function calcularTotal() {
    var total = 0;
    for (var i = 1; i <= 5; i++) {
        var precio = parseFloat(prompt("Introduce el precio del producto " + i));
        total += precio;
    }

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiamos el contenido del div antes de mostrar el resultado

    if (total >= 100) {
        var descuento = total * 0.15;
        var precioFinal = total - descuento;
        resultadoDiv.textContent = "Precio original: " + total.toFixed(2) + " euros\nPrecio final con descuento: " + precioFinal.toFixed(2) + " euros";
    } else {
        resultadoDiv.textContent = "Precio total: " + total.toFixed(2) + " euros";
    }
}


