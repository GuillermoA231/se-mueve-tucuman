// Obtener la imagen que queremos cambiar
const imagenObjetivos = document.getElementById("imagen-objetivos");
const actividadesList = document.getElementById("actividades-list");

// Agregar un event listener al contenedor de actividades usando delegación de eventos
actividadesList.addEventListener("click", (event) => {
  // Verificar si el clic se hizo en un elemento <li>
  if (event.target.tagName === "LI") {
    const actividadId = event.target.id;
    // Asignar la imagen correspondiente según el elemento <li> clicado
    switch (actividadId) {
      case "actividad1":
        imagenObjetivos.src = "./resources/actividades/pausa.jpg";
        break;
      case "actividad2":
        imagenObjetivos.src = "./resources/actividades/terapia.jpg";
        break;
      case "actividad3":
        imagenObjetivos.src = "./resources/actividades/cardio.jpg";
        break;
      case "actividad4":
        imagenObjetivos.src = "./resources/actividades/escuela.jpg";
        break;
      case "actividad5":
        imagenObjetivos.src = "./resources/actividades/inclusion.jpg";
        break;
      default:
        // En caso de que el ID no coincida con ninguna actividad, no hacer nada
        break;
    }
  }
});
