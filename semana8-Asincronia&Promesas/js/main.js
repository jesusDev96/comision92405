/* setTimeout */
/* console.log("Preparando motores!")
let largada = setTimeout(()=> {
    console.log("Largada!!")
}, 0)
console.log("Primera vuelta en marcha!!") */

/* setInterval */
/* console.log("Atencion a las bandaeras amarillas!")
let safetyCar = setInterval(()=> {
    console.log("Banderas amarillas, seguir al auto de seguridad")
}, 1500) */



/* try-catch-finally */

/* let pitStop = parseFloat(prompt("De cuanto segundos fue la detencion?"))
let analisis = ""
try {
    //bloque de codigo a analizar
    if(pitStop < 3.1) {
        analisis = "Buena parada, dentro de lo esperado"
    } else {
        throw new Error("Parada lenta, perdiste posiciones")
    }
} catch(err){
    //si el try detecta error, va al catch
    analisis = err
} finally {
    //bloque de codigo que se ejecuta si o si(opcional)
    console.log("Analisis del pitstop: ", analisis)
} */


//PROMESAS

function podioChecker(posicion) {
    return new Promise((resolve, reject) => {
        if(posicion > 3) {
            return reject(`Terminaste en la posicion "${posicion}" no vas al podio`)
        }
        setTimeout(()=> {
            resolve({
                posicion,
                result: "Felicitaciones! Vas al podio"
            })
        }, 1500)
    })    
}
podioChecker(2).then(data => console.log(data))