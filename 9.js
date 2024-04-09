// Importar la API
const api = require("https://1.io");// aqui va la api

// Obtener la lista de películas
function getPeliculas() {
  // Realizar la solicitud HTTP
  const response = await api.get("/peliculas");

  // Decodificar la respuesta
  const peliculas = await response.json();

  // Devolver la lista de películas
  return peliculas;
}

// Mostrar la lista de películas
function mostrarPeliculas(peliculas) {
  // Limpiar el contenido de la sección
  document.querySelector("#inicio").innerHTML = "";

  // Iterar sobre la lista de películas
  for (const pelicula of peliculas) {
    // Crear un elemento <div> para cada película
    const div = document.createElement("div");

    // Agregar el título de la película
    div.appendChild(document.createTextNode(pelicula.titulo));

    // Agregar la fecha de estreno de la película
    div.appendChild(document.createTextNode(" - " + pelicula.fechaEstreno));

    // Agregar el género de la película
    div.appendChild(document.createTextNode(" - " + pelicula.genero));

    // Agregar un enlace para editar la película
    div.appendChild(document.createElement("a"));
    div.querySelector("a").href = "editar.php?id=" + pelicula.id;
    div.querySelector("a").textContent = "Editar";

    // Agregar un enlace para eliminar la película
    div.appendChild(document.createElement("a"));
    div.querySelector("a").href = "eliminar.php?id=" + pelicula.id;
    div.querySelector("a").textContent = "Eliminar";

    // Agregar el elemento <div> a la sección
    document.querySelector("#inicio").appendChild(div);
  }
}

// Iniciar la aplicación
document.addEventListener("DOMContentLoaded", async () => {
  // Obtener la lista de películas
  const peliculas = await getPeliculas();

  // Mostrar la lista de películas
  mostrarPeliculas(peliculas);
});
