// condicionales
// let validar = false

// if(validar) {
//     console.log("Variable verdadera")
// }

// let fruta = "mandarina"
// let mes = "mayo"

// if(fruta == "mandarina") {
//     console.log("Es una fruta de otoño")
// } else if (fruta == "frutilla") {
//     console.log("Es una fruta de la primavera")
// } else {
//     console.log("banana o manzana son frutas de todo el año")
// }

// OR ||

// if(fruta == "mandarina" || mes == "mayo") {
//     console.log("puede ser que estemos en otoño")
// }

// AND &&

// if(fruta == "mandarina" && (mes == "marzo" || mes == "abril" || mes == "mayo" || mes == "junio")) {
//     console.log("muy probablemente estemos en otoño")
// }

// < >

// let edad = 18
// if(edad >= 18) {
//     console.log("Podes comprar en la vinoteca")
// } else {
//     console.log("Sos menor, va contra la ley")
// }



// FOR
// for("desde"; "hasta"; "actualizacion") {
//     // bloque de codigo a ejecutar
// }

// for(let i=1; i<=10; i++) {
//     console.log(i)
// }

// let numero = parseInt(prompt("Ingrese la tabla de multiplicar que desee"))
// console.log("Tabla de multiplicar del " + numero)
// for(let i=1; i<=15; i++) {
//     let resultado = numero*i
//     console.log(numero + "x" + i + ": " + resultado)
// }

// for(let i=10; i>=1; i--) {
//     console.log(i)
// }


// WHILE
// let continuar = true
// while(continuar) {
//     let numero = parseInt(prompt("Ingrese la tabla de multiplicar que desee"))
//     console.log("Tabla de multiplicar del " + numero)
//     for(let i=1; i<=5; i++) {
//         let resultado = numero*i
//         console.log(numero + "x" + i + ": " + resultado)
//     }
//     let confirmacion = prompt("Desea hacer otro calculo? (si/no)").toLowerCase()
//     if(confirmacion == "no") {
//         continuar = false
//         console.log("Gracias!!")
//     }
// }


// SWITCH-CASE
let continuar = true
while(continuar) {
    let menu = parseInt(prompt("Ingrese 1 para ver su saldo, 2 para depositos, 3 para extracciones"))
    
    switch(menu) {
        case 1:
            alert("Total de la cuenta: $300.000")
            break
        case 2:
            alert("Limite de deposito: $50.000")
            break
        case 3:
            alert("Limite de extraccion: $30.000")
            break
        default:
            alert("Opcion incorrecta")
    }
    let confirmacion = prompt("Desea hacer otra consulta? (si/no)").toLowerCase()
    if(confirmacion == "no") {
        continuar = false
        alert("Retire su tarjeta")
    }
}
