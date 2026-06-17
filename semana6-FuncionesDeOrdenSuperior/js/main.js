// Funcion que retorna otra funcion

// function multiplica(numeroA, numeroB) {
//     let resultado = numeroA*numeroB
//     return resultado
// }

// function multiplicar(numeroA) {
//     return(numeroB) => numeroA*numeroB
// }
// const resultado = multiplicar(10)
// console.log(resultado(5))


// function elegirOperacion(operacion) {
//     if(operacion == "multiplicar") {
//         return(a,b) => a*b
//     } else if (operacion == "dividir") {
//         return(a,b) => a/b
//     }
// }

// let operacionElegida = elegirOperacion("dividir")
// console.log(operacionElegida(10,5))



// Funcion que recibe otra funcion por parametro
// const numeros = [1, 2, 3, 4, 5]

// function iterador(datos, accion) {
//     for(const dato of datos) {
//         accion(dato)
//     }
// }
// iterador(numeros, console.log)

// function multiplicar(numeroA) {
//     let resultado = numeroA*10
//     console.log(resultado)
// }
// iterador(numeros, multiplicar)

// const tablaDel10 = []
// iterador(numeros, (numero) => tablaDel10.push(numero*10))
// console.log(tablaDel10)





const productos= [
    {
        id: 1, 
        nombre: "televisor", 
        precio: 5000
    },
    {
        id: 2, 
        nombre: "lavarropas", 
        precio: 8000
    },
    {
        id: 3, 
        nombre: "microondas", 
        precio: 2000
    },
    {
        id: 4, 
        nombre: "secadora", 
        precio: 4000
    },
    {
        id: 5, 
        nombre: "cocina", 
        precio: 13000
    },
]

// forEach()
// productos.forEach(producto => {
//     // console.log(producto)
//     console.log("Producto: " + producto.nombre + " Precio: $" + producto.precio)
// })

// find()
// const buscar = productos.find(producto => producto.nombre == "celular")
// console.log(buscar)

// filter()
// let precioMaximo = parseInt(prompt("Ingrese su presupuesto maximo"))
// let filtrados = productos.filter(producto => producto.precio <= precioMaximo)
// console.log(filtrados)

// let css = productos.filter(producto => producto.nombre.includes("CSS"))
// console.log(css)

// some()
// console.log(productos.some(producto => producto.nombre == "televisor"))

// let buscar = prompt("Ingrese el producto a ver si esta en stock")
// let hayStock = productos.some(producto => producto.nombre == buscar)
// if(hayStock) {
//     console.log("Esta disponible")
// } else {
//     console.log("No esta en stock")
// }

// map()
// const productosDisponibles = productos.map(producto => producto.nombre)
// console.log(productosDisponibles)

// const descuento = productos.map(producto => {
//     let precioDescuento = producto.precio - (producto.precio*20/100)
//     return {
//         id: producto.id,
//         nombre: producto.nombre,
//         precio: precioDescuento
//     }
// })
// console.log(descuento)

// reduce()
const total = productos.reduce((contador, producto) => contador + producto.precio, 0)
console.log(total)