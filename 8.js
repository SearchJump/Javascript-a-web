// Variables globales
const contactos = [];

// Función para cargar los contactos del local storage
function cargarContactos() {
  const datos = localStorage.getItem("contactos");
  if (datos) {
    contactos = JSON.parse(datos);
  }
}

// Función para agregar un contacto
function agregarContacto() {
  const nombre = document.querySelector("#form-contacto input[name=nombre]").value;
  const celular = document.querySelector("#form-contacto input[name=celular]").value;

  // Validar que los campos no estén vacíos
  if (nombre === "" || celular === "") {
    alert("Los campos nombre y celular deben estar completos");
    return;
  }

  // Agregar el contacto al vector
  contactos.push({
    nombre: nombre,
    celular: celular
  });

  // Guardar los contactos en el local storage
  localStorage.setItem("contactos", JSON.stringify(contactos));

  // Limpiar los campos del formulario
  document.querySelector("#form-contacto input[name=nombre]").value = "";
  document.querySelector("#form-contacto input[name=celular]").value = "";

  // Actualizar la lista de contactos
  actualizarListaContactos();
}

// Función para actualizar la lista de contactos
function actualizarListaContactos() {
  const listaContactos = document.querySelector("#lista-contactos");
  listaContactos.innerHTML = "";

  for (const contacto of contactos) {
    const li = document.createElement("li");
    li.textContent = `${contacto.nombre} - ${contacto.celular}`;
    listaContactos.appendChild(li);
  }
}

// Cargar los contactos al iniciar la aplicación
cargarContactos();

// Agregar evento de clic al botón de agregar contacto
document.querySelector("#form-contacto button").addEventListener("click", agregarContacto);
