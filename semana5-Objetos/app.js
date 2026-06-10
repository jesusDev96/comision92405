// function Persona(nombre, apellido, edad) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
// }

// let persona1 = new Persona("Anita", "Padilla", 36);
// console.log("nombre", persona1.nombre);

// // cambiar valor de una propiedad
// console.log("edad", persona1.edad);
// persona1.edad = 37;
// console.log("edad", persona1.edad);

// // eliminar una propiedad
// delete persona1.edad;
// console.log(persona1);

// // agregar propiedad
// persona1.nacionalidad = "Perú";
// console.log(persona1);

// class Persona {
//   constructor(nombre, apellido, edad) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//   }

//   cumple() {
//     this.edad++;
//   }
// }

// let persona2 = new Persona("Claudio", "Zacarias", 38);
// console.log(persona2);

// persona2.cumple();
// console.log(persona2);

// let persona3 = {
//   apellido: "aguilera",
//   nombre: "matias",
//   edad: 27
// };

// console.log(persona3);

// Array de objetos

// let productos = [
//   { id: 1, nombre: "remera", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 2000 }
// ];

// Ejemplo en vivo 2.0

let carrito = [];
let eleccion;
let productos = [
  { id: 1, nombre: "Pizza", precio: 28000 },
  { id: 2, nombre: "Sushi", precio: 70000 },
  { id: 3, nombre: "Milanesa con puré", precio: 15000 },
  { id: 4, nombre: "Ceviche", precio: 30000 }
];

const agregarAlCarrito = (producto) => {
  carrito.push(producto);
};

const eliminarDelCarrito = (eleccion) => {
  carrito.splice(eleccion - 1, 1);
};

const agregarOpcion = () => {
  eleccion = parseInt(
    prompt(
      "Bienvenido/a a mi tienda, porfavor elija una opción: \n 1) Pizza \n 2) Sushi \n 3) Milanesa con puré \n 4) Ceviche"
    )
  );

  let prodSelected = productos[eleccion - 1];

  if (prodSelected) {
    agregarAlCarrito(prodSelected);
  } else {
    alert("El producto seleccionado no esiste.");
  }
};

const eliminarOpcion = () => {
  eleccion = prompt("Elija la posición del producto a eliminar");

  let prodSelected = carrito[eleccion - 1];

  if (prodSelected) {
    eliminarDelCarrito(eleccion);
  } else {
    alert("El producto seleccionado no esiste.");
  }
};

do {
  eleccion = prompt(
    "Bienvenido/a a mi tienda, porfavor elija una opción: \n 1) Agregar al carrito \n 2) Eliminar del carrito \n 3)Ver total \n 4)Salir del negocio"
  );

  switch (eleccion) {
    case "1":
      agregarOpcion();
      break;
    case "2":
      eliminarOpcion();
      break;
    case "3":
      let total = 0;
      for (const prod of carrito) {
        total += prod.precio;
      }
      alert("El total hasta el moment es de : $" + total);
      console.log("El carrito hasta el moment es: ", carrito);
      break;
    case "4":
      if (carrito.length > 0) {
        console.log("El carrito hasta el moment es: ", carrito);
      } else {
        alert("No pasa nada crack");
      }
      break;
    default:
      alert("le pifiste man");
      break;
  }
} while (eleccion != "4");
