// Seleccionamos el botón por su ID
const button = document.getElementById("colorButton");
const switchButton = document.getElementById("switchButton");
// Creamos un arreglo con algunos colores
const colors = [ "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#f4f4f4",];
const members = [
  {
    photo: "alumno1.png",
    title: "Alumno 1",
    name: "Maximiliano Díaz Miranda",
    desc: "Alumno de ingenieria en sistemas computacionales de 7mo semestre que no le gusta hacer tarea",
  },

  { photo: "alumno0.jpg", 
    title: "Alumno 2",
    name: "Andres Monjaras" ,
    desc: "Hola (sin ofender), soy Monjaras, me gusta ayudar a mis amigos:D."},
];

const buttonsContainer = document.getElementById("memberButtons");
const container = document.getElementById("memebers");

const memberButtonsContainer = document.getElementById("memberButtons");
const card = document.querySelector(".card");
const cardImg = card.querySelector(".card-img img");
const cardTitle = card.querySelector(".card-content h3");
const cardName = card.querySelector(".card-content h4");
const cardDesc = card.querySelector(".card-content p");
const cardDots = card.querySelector(".card-dots");

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

      // document.getElementById("reloj").textContent ="Hora actual:\n\n"+ 
      //   `${horas}`+"\n"+`${minutos}`;

      document.getElementById(
        "reloj"
      ).innerHTML = `Hora actual:<br><br><span class="hora">${horas}`+"\n"+`${minutos}</span>`;

    }
    

     // Actualiza cada segundo
    setInterval(actualizarReloj, 1000);

    // Mostrar inmediatamente sin esperar 1s
    actualizarReloj();

    

// ===========================
// 🔹 Mostrar botones por integrante
// ===========================


// Crear un botón por cada integrante
members.forEach((member, i) => {
  const btn = document.createElement("button");
  btn.textContent = 'Integrante '+(i+1);
  btn.addEventListener("click", () => showMember(i));
  btn.style.margin = "5px";
  buttonsContainer.appendChild(btn);
});


function showMember(i) {
  if (!card) return;

  // animación si tienes clases CSS 'fade-out'/'fade-in' (si no, funciona igual)
  card.classList.add("fade-out");

  // esperar un poco para que se vea la transición (si no hay CSS, el timeout aún evita parpadeos)
  setTimeout(() => {
    // actualizar contenido de la tarjeta
    cardImg.src = `img/${members[i].photo}`;
    cardImg.alt = `Foto ${members[i].title}`;
    cardTitle.textContent = members[i].title;
    cardName.textContent = members[i].name;
    cardDesc.textContent = members[i].desc;

    // actualizar estado de dots (clase 'active')
    const dots = cardDots.querySelectorAll(".dot");
    dots.forEach((d) =>
      d.classList.toggle("active", Number(d.dataset.index) === i)
    );

    card.classList.remove("fade-out");
    card.classList.add("fade-in");
    setTimeout(() => card.classList.remove("fade-in"), 350);
  }, 180);
}

// Función para mostrar a un integrante específico
// function mostrarIntegrante(i) {
//   container.classList.add("fade-out");

//   setTimeout(() => {
//     container.innerHTML = `
//       <img src="img/${members[i].photo}" alt="foto ${members[i].title}">
//       <h3>${members[i].title}</h3>
//       <p>${members[i].desc}</p>
//     `;

//     container.classList.remove("fade-out");
//     container.classList.add("fade-in");

//     setTimeout(() => container.classList.remove("fade-in"), 500);
//   }, 500);
// }
