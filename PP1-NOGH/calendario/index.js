function obtenerProximaSemana() {
    let fechaActual = new Date();
    
    // Si hoy es sábado o domingo, mueve la fecha al siguiente lunes
    if (fechaActual.getDay() === 6) { // Sábado
        fechaActual.setDate(fechaActual.getDate() + 2);
    } else if (fechaActual.getDay() === 0) { // Domingo
        fechaActual.setDate(fechaActual.getDate() + 1);
    }

    let inicioSemana = new Date(fechaActual);
    inicioSemana.setDate(inicioSemana.getDate() + (1 - inicioSemana.getDay()) + 7); // Lunes siguiente
    let finSemana = new Date(inicioSemana);
    finSemana.setDate(finSemana.getDate() + 4); // Viernes de la próxima semana

    return { inicio: inicioSemana, fin: finSemana };
}

function mostrarDiasSemana() {
    let semana = obtenerProximaSemana();
    let calendario = document.getElementById("calendario");
    calendario.innerHTML = ""; // Limpia cualquier contenido previo

    let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    for (let i = 0; i < diasSemana.length; i++) {
        let dia = new Date(semana.inicio);
        dia.setDate(dia.getDate() + i);
        
        let botonDia = document.createElement("button");
        botonDia.className = "btn-dia";
        botonDia.innerText = `${diasSemana[i]} (${dia.getDate()}/${dia.getMonth() + 1}/${dia.getFullYear()})`;
        calendario.appendChild(botonDia);
    }
}

mostrarDiasSemana();

document.querySelectorAll(".btn-dia").forEach(boton => {
    boton.addEventListener("click", function() {
        this.classList.toggle("selected");
        // Aquí podrías manejar la lógica para guardar los días seleccionados
    });
});
