// # tipo de datos basicos en javascript

console.group("tipos de datos de js")
let variable1 = 12
let variable2 = "454725855"
let variable3 = "hola mundo"
let variable4 = true
let variable5 = null
let variable6 = undefined
let variable7 = [1, 2, 3, 4, 5, 6]
let variable8 = { "name": "javier", "lastName": "apellido", "age": 26 }
let variable9 = function () {
    console.log("Hola mundo")
}

console.log("variable 1:", typeof variable1);

console.log("variable 2:", typeof variable2);

console.log("variable 3:", typeof variable3);

console.log("variable 4:", typeof variable4);

console.log("variable 5:", typeof variable5);

console.log("variable 6:", typeof variable6);

console.log("variable 7:", typeof variable7);

console.log("variable 8:", typeof variable8);

console.log("variable 9:", typeof variable9);

console.groupEnd()


// OPERADORES ARTIMÈTICOS

console.groupCollapsed("operadores aritmèticos")
let numero1 = 6
let numero2 = 8

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicaciòn = numero1 * numero2
let division = numero1 / numero2
let potencia = numero1 ** numero2 //numero1 elevado (**) a la numero2.
let modulo = numero1 % numero2

console.log("la suma de los nùmeros es ", suma)
console.log("Resta: ", resta)
console.log("Multiplicaciòn: ", multiplicaciòn)
console.log("Divisiòn: ", division)
console.log("Potencia: ", potencia)
console.log("El restante, residuo, modulo o lo que sobre de la divisiòn es: ", modulo) //modulo es el residuo de la divisiòn.


console.groupEnd()

// OPERADORES  DE INCREMENTO Y DECREMENTO 

console.groupCollapsed("operadores de incremento y decremento")

let numeroParaIncrementar = 50
let numeroParaDecrementar = 100

console.info("Inicio:", numeroParaIncrementar)

numeroParaIncrementar++ // 51, suma una unidad a la variable inicial, osea que si es cero le suma uno y queda en 1.
numeroParaIncrementar++ // 52
numeroParaIncrementar += 5 //57 para incrementar 5 u otro nùmero.

console.info(numeroParaIncrementar)

console.info("Fin:", numeroParaDecrementar)

numeroParaDecrementar-- // 99
numeroParaDecrementar-- // 98
numeroParaDecrementar -= 5 // 93

console.info(numeroParaDecrementar)
console.groupEnd()


// OPERADORES DE COMPARACIÒN 

console.group("operadores de comparaciòn")

let respuesta = true

// operador de igualdad. "=="  los dos iguales sirven apra comparar datos y valores, los tres iguales "===" solosirven para comparar tipo de dato.
console.log(4 == 4) // true
console.log(4 == "4") //true
console.log(4 === "4") // false
console.log(4 === 4) // true


// operador de diferencia "!="

console.log(4 != 4) // false
console.log(4 != "4") // false
console.log(4 !== "4") // true. porque son diferentes tipos de datos.
console.log(4 !== 4) // false. porque son el mismo tipo de dato.

// operador de menor que "<" o mayor que ">"

console.log(2 < 5) // true
console.log(60 < 35) // false
console.log(5 < 5) // false
console.log(15 <= 15) // true

console.groupEnd()

// operadores lògicos

console.groupCollapsed("operadores lògicos")

console.log(2 < 5) //true

console.log(2 > 1) // true

console.log(2 < 5 && 2 > 45) // true && false = false,  true && true = true.
console.log(2 > 1 && 10 > 6 && 100 > 89 && 5 < 1) // true && true && true && false = false . Pero si todas son true el resultado es true.

let usuario = "chucho"
let password = "password"

console.log(usuario == "chucho" && password == "1234") // true && false = false.


// USO DEL OPERADOR "OR"

console.log(5 > 10 || 2 < 8) // true OR true = true. false OR true = true.  false OR true OR false = true. Desde que solo una sea verdadera el resultado será verdadero(true).


// OPERADORES LÓGICOS ANIDADOS 

console.log(4 < 10 && 2 < 60 || "Operador" == "operador") // (true && true) OR (false) = true.

const usuarioAdmin = "admin"
const passwordAdmin = "password1234"
const rol = "junior"

console.log((usuarioAdmin == "admin" && passwordAdmin == "password1234") && (rol == "admin" || rol == "supervisor" )) // false

// OPERADOR DE NEGACIÓN  NOT (!). si la variable está true y le aplico el NOT me la convierte al false y lo mismo en sentido contrario.

let variable = false

console.log(!variable) // true


console.groupEnd()