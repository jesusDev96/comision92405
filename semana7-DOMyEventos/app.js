// getElementsByTagName()

// const miDiv = document.getElementsByTagName("div");

// console.log(miDiv);

// getElementsByClassName()

// const miDiv = document.getElementsByClassName("titulo");
// console.log(miDiv);

// getElementById()

// const miDiv = document.getElementById("title");
// console.log(miDiv);

// querySelector() & querySelectorAll()

// const miDiv = document.querySelector("div");
// console.log(miDiv);

// const miDiv = document.querySelectorAll(".titulo");
// console.log(miDiv);

// Modificación de notos

// const miH1 = document.querySelector("div");

// miH1.innerHTML = "Chau mundo!";

// miH1.innerHTML = "<h1 >Jeje</h1>";
// miH1.innerText = "jeje";

// classname

// const miH1 = document.querySelector("#title");
// miH1.className = "borroTodo";
// console.log(miH1.className);

// miH1.classList.add("chau");
// miH1.classList.remove("chau");
// miH1.classList.toggle("chau");
// miH1.classList.replace("titulo", "chau");
// console.log(miH1.classList.contains("chau"));

// Eventos

// mouse

// document.querySelector("#evento").addEventListener("mousedown", () => {
//   console.log("Hice click hacia abajo.");
// });

// document.querySelector("#evento").addEventListener("mouseup", () => {
//   console.log("Suelto el click.");
// });

// document.querySelector("#evento").addEventListener("click", () => {
//   console.log("Click.");
// });

// document.querySelector("#evento").addEventListener("mouseover", () => {
//   console.log("Entro");
// });

// document.querySelector("#evento").addEventListener("mouseout", () => {
//   console.log("Salgo");
// });
// document.querySelector("#evento").addEventListener("mousemove", () => {
//   console.log("Me muevo");
// });

// teclado

// document.querySelector("#text").addEventListener("keydown", () => {
//   console.log("aprieto");
// });

// document.querySelector("#text").addEventListener("keyup", () => {
//   console.log("suelto");
// });

// change

// document.querySelector("#text").addEventListener("change", () => {
//   console.log("Cambié");
// });

// input

// document.querySelector("#text").addEventListener("input", () => {
//   console.log("Cambié");
// });

//submit

// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log(e.target.children[0].value);

//   console.log("Formulario Enviado");
// });

// Ejemplo en vivo

const contenedor = document.querySelector("#contenedor");
let carrito = [];

let productos = [
  { id: 1, nombre: "remera", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 2000 },
  { id: 3, nombre: "zapatilla", precio: 3000 },
  { id: 4, nombre: "campera", precio: 4000 }
];

productos.forEach((prod) => {
  let div = document.createElement("div");

  div.innerHTML = `
        <h3>${prod.nombre}</h3>
        <span>${prod.precio}</span>
        <button class='btnAgregar' data-id=${prod.id} >Agregar al carrito</button>
    `;

  contenedor.appendChild(div);
});

let btnsAgregar = document.querySelectorAll(".btnAgregar");

btnsAgregar.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let idSelected = e.target.dataset.id;
    let prodSelected = productos.find((prod) => prod.id == idSelected);
    carrito.push(prodSelected);
    console.log("carrito", carrito);
  });
});
