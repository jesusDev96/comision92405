// function saludar() {
//   console.log("hola mundo!");
// }

// saludar();

// function solicitarNombre(nombre, apellido) {
//   alert("El nombre ingresado es " + nombre + " " + apellido);
// }

// solicitarNombre("Sebastian", "Aguirre");

// Parámetros y scope

// function sumar(num1, num2) {
//   let resultado = num1 + num2; // resultado es una variable Local
//   return resultado;
// }

// function restar(num1, num2) {
//   let resultado = num1 - num2; // resultado es una variable Local
//   return resultado;
// }

// let resultado = sumar(5, 10); // resultado es una variable Global
// console.log(resultado);

// Funciones anónimas y funciones flecha

// const saludar = function () {
//   console.log("soy anónima");
// };

// saludar();

// const restar = (num1, num2) => num1 - num2;
// const sumar = (num1, num2) => num1 + num2;

// console.log(restar(10, 5));
// console.log(sumar(10, 5));

// Ejemplo en vivo
let total = 0;
let eleccion;

const mostrarTotal = (precio, simbolo) => {
  total += precio;
  alert("Total hasta el moment: $" + total);
};

const eliminarDelTotal = (precio) => {
  total -= precio;
  alert("Total hasta el moment: $" + total);
};

const agregarAlCarrito = () => {
  eleccion = prompt(
    "Bienvenido/a a mi tienda, porfavor elija una opción: \n 1) Pizza \n 2) Sushi \n 3) Milanesa con puré \n 4) Ceviche"
  );
  switch (eleccion) {
    case "1":
      mostrarTotal(28000);
      break;
    case "2":
      mostrarTotal(70000);
      break;
    case "3":
      mostrarTotal(15000);
      break;
    case "4":
      mostrarTotal(30000);
      break;
    default:
      alert("le pifiste man");
      break;
  }
};

const eliminarDelCarrito = () => {
  eleccion = prompt(
    "Bienvenido/a a mi tienda, porfavor elija una opción: \n 1) Pizza \n 2) Sushi \n 3) Milanesa con puré \n 4) Ceviche"
  );
  switch (eleccion) {
    case "1":
      eliminarDelTotal(28000);
      break;
    case "2":
      eliminarDelTotal(70000);
      break;
    case "3":
      eliminarDelTotal(15000);
      break;
    case "4":
      eliminarDelTotal(30000);
      break;
    default:
      alert("le pifiste man");
      break;
  }
};

do {
  eleccion = prompt(
    "Bienvenido/a a mi tienda, porfavor elija una opción: \n 1) Agregar al carrito \n 2) Eliminar del carrito \n 3)Salir del negocio"
  );

  switch (eleccion) {
    case "1":
      agregarAlCarrito();
      break;
    case "2":
      eliminarDelCarrito();
      break;
    case "3":
      if (total > 0) {
        alert("Muchas gracias por visitarnos, su total es de: $" + total);
      } else {
        alert("No pasa nada crack");
      }
      break;
    default:
      alert("le pifiste man");
      break;
  }
} while (eleccion != "3");
