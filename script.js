// Seleccionamos el botón por su ID
const button = document.getElementById("colorButton");
const switchButton = document.getElementById("switchButton");
// Creamos un arreglo con algunos colores
const colors = [ "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#f4f4f4",];
const members = [
  { photo: "alumno2.png", name: "Alumno 2", desc: "descripcion ..." },
  { photo: "alumno1.png", name: "Alumno 1", desc: "Alumno de ingenieria en sistemas computacionales de 7mo semestre que no le gusta hacer tarea" },
];
// Variable para llevar el control del color actual
let index = 0;
let indexSW = 0;
// Agregamos un evento "click" al botón
button.addEventListener("click", function () {
  // Cambiamos el color de fondo del body
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length; // Avanzamos al siguiente color de forma cíclica
 
});



//reloj
 function actualizarReloj() {
      const ahora = new Date();
      let horas = ahora.getHours();
      let minutos = ahora.getMinutes();
      let segundos = ahora.getSeconds();

      // Agregar ceros a la izquierda
      horas = horas < 10 ? "0" + horas : horas;
      minutos = minutos < 10 ? "0" + minutos : minutos;
      segundos = segundos < 10 ? "0" + segundos : segundos;

      document.getElementById("reloj").textContent ="Hora actual:   "+ 
        `${horas}:${minutos}:${segundos}`;
    }

     // Actualiza cada segundo
    setInterval(actualizarReloj, 1000);

    // Mostrar inmediatamente sin esperar 1s
    actualizarReloj();

    
    //Mostrar el cambio de integrantes
 switchButton.addEventListener("click", function () {
  const container = document.getElementById("memebers");

  container.classList.add("fade-out");

  setTimeout(() => {
    container.innerHTML = `
      <img src="img/${members[indexSW].photo}" alt="foto alumno">
      <p>${members[indexSW].desc}</p>
    `;

    let nextIndex = (indexSW + 1) % members.length;
    switchButton.textContent = `Mostrar ${members[nextIndex].name}`;
    indexSW = nextIndex;

    container.classList.remove("fade-out");
    container.classList.add("fade-in");

    setTimeout(() => container.classList.remove("fade-in"), 500);
  }, 500);
});
