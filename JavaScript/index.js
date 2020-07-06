// console.log('Hola Mundo@!')
// Para ejecutar el programa JS en Consola se ingresa el comando 'node' + espacio + 'nombreArchivo.js'
//Tipos de Datos JS

//String: Cadena de caracteres. Se pueden usar '...' ó "..."
//Boolean: True or False.
//Null: Cuando una variable se encuentra vacía.
//Number: Se escribe si comillas.
//Undefined: No está definido.
//Object: Objeto (Contiene cualquier combinación de datos. Son estructuras que permiten agrupar el resto de los datos).

// Podemos declarar variables con:
// var = "Forma antigua de declarar una variable."
// const = Si lo definimos con const no nos va a dejar cambiar el valor que contiene la variable (si las propiedades).
// let = Permite cambiar los valores de la variable 

//String
let miPrimeraVariable = "Mi primera variable!"
//console.log(miPrimeraVariable);

// Mutabilidad: las variables pueden mutar asignándoles nuevos valores.
miPrimeraVariable = "Ahora mutó a otro texto"
console.log(miPrimeraVariable);

//Boolean
let miBooleanTrue = true
let miBooleanFalse = false

//Number
let aNumber = 14
let anotherNumber = -33
let sumVar = aNumber + anotherNumber

//console.log(aNumber, miBooleanFalse, anotherNumber);
//console.log(sumVar);

//Objeto
// Para declarar propiedades dentro de un objeto se utiliza nombreDeProp + ':' + valor + ',' sin utilizar el let ni var.
const miPrimerObjecto = {}

const miObjeto = {
    aNumber: 14,
    aString: "Pearl Jam",
    condition: true, 
}
//console.log(miObjeto);
//console.log(miObjeto.aString);

//Arreglo

const arrEmpty = []
const myArr = [1, 2, miPrimeraVariable, miObjeto]
//console.log(myArr);

// Para insertar un elemento al arreglo se utiliza el método .push()

arrEmpty.push(17, "Agregué el 17 y este Strng con arrEmpty.push(17 + String)");
// console.log(arrEmpty);

// OPERADORES MATEMÁTICOS

const suma = 5 + 5
const resta = 10 - 5
const multipl = 2 * 5
const div = 10 / 2
const modulo = 10 % 3

// Para sumar o restar de a 1 ++ ó -- respectivamente
let itir = 5
itir++

//Operadores de asignación
// Permite realizar una operación matemática sobre el número que definimos y cambiar su valor:

itir += 3
console.log(itir);


// OPERADORES DE COMPARACIÓN
// Sirven para comparar entre distintos tipos de datos

const igualEstricta = 5 === 5 //Devuelve true
const igualEstricta1 = 5 === "5" //Devuelve false
const igual = 5 == 5 //Devuelve true
const igual1 = 5 == "5" //Devuelve true. Compara number con string

//Menor - Mayor

const esMenor = 5 < 10
const esMayor = 10 > 5
const menorIgual = 5 <= 5
const mayorIgual = 6 >= 5

//Desigualdad

const compDesigual = 5 !== "5" //true
const desigual = 5 != "5" //false


//OPERACIONES LÓGICAS
// Short Circuit Evaluation: Evalúa hasta que se encuentre con el primer valor que corte la operación. 
// Or (||) evalúa hasta el primer true, el resto no lo lee. And (&&) evalúa hasta el false 
// Todos los números, string, Obj, MENOS EL 0, evalúan en true. 
// or || 
// and &&
// not !

const resultadoOr =  true || false //Siempre que haya un true va a devolver true (busca el true, sólo si todo es falso devuelve false)
const resultadoAnd = false && false //Siempre que haya un false va a devolver false (busca el false, sólo si todo es true devuelve true)
const resultadoNot = !true //Invierte el resultado si es boolean


//CONTROL DE FLUJO
// Nos permite iterar y evaluar condiciones.
// if (si la condición es true) { 
    // Se ejecuta esto
// }

if(true) {
   // console.log("Estoy dentro de un if"); // Imprime ese String
}

if(!true) {
   // console.log("Estoy dentro de un if"); // No imprime nada porque es falso
}

const edad = 5

if (edad > 5 && edad < 10) {
    // console.log("Puede jugar")
} else {
    // console.log("No puede jugar") // En este caso salta al else porque no es mayor a 5. Se imprime "No puede jugar"
}

// While o loop, queda iterando hasta el final de los cíclos a no ser que le digamos lo contrario. Siempre que sea true vuelve a evaluar hasta encontrar un false.
// while (si la condición a evaluar es true) { 
        // Se ejecuta esto
// }

let x = 0
while(x < 5){
    // console.log(x);
    x++ // Va a imprimir 0, 1, 2, 3, 4 y sale de la evaluación
}

//Switch permite ejecutar una instrucción u otra dependiendo el valor que recibe
// switch (recibe una expresión) {
    // case 1: {
        // break;
    // }
    // case 2: {
        // break;
    // }
    // deafault:
    // break;
// }

const bandaRock = 2

switch (bandaRock) {
    case 1: console.log("Silverchair");
    break;
    case 2: console.log("Pearl Jam");
    break;
    case 3: console.log("Dave Matthews Band");
    break;
    default: console.log("Me gusta el pop");
    break;
}

// For (bastante similar a While), nos permite iterar hasta que ya no se cumpla la condición indicada.
// for (valor inicial de la variable; condición que tiene que cumplir para que siga iterando; qué operación tiene hacer en cada iteración){
    // Lo que quiero que se ejecute;
// }

for (let i = 0; i < 5; i++){
    //console.log(i); // Va a imprimir de 0 a 4 y sale de la iteración
}

//Como acceder a los elementos de un array usando for:

const myArray = ["Silverchair", "Pearl Jam", "Dave Matthews Band", "The Dear Hunter", "Nirvana"]
// Se puede acceder a cualquier elemento del array con myArray[número de posición empezando desde 0];

for (let i = 0; i < myArray.length; i++){
    //console.log(myArray[i]);
}

// FUNCIONES
// Se utilizan para poder reutilizar código y no duplicar. En JS además de ejecutar código, las funciones cumple también con ser valores. Por eso se pueden pasar como argumentos
// a otras funciones.
// function nombreDeFuncion (argumentos) {
    // Lo que voy a ejecutar al llamar la función
// }

function iterar (arg1) {
    for (let i = 0; i < arg1.length; i++){
        console.log(arg1[i]);
    }
}

// De esta forma le podemos pasar el areglo que querramos como parámetro, iterarlo e imprimirlo sin reescribir código

const nombres = ["Jon", "Dave", "Lisa", "Andy", "Marketa"]
const numeros = [1, 2, 3, 4, 14]

//iterar(nombres) //Imprime nombres
//iterar(numeros) //Imprime números


function sumaDeValores (a, b) {
    return a + b; // return se usa para reutilizar el resultado de la función sin imprimirlo en consola
}

const resultadoSuma = sumaDeValores (2, 3) // Guardo el resultado en otra const.
// console.log(resultadoSuma);

//CALLBACK
// Es una función que se ejecuta al final de una función.

function sumarConCallback (a, b, cb){
    const r = a + b;
    cb(r);
}

function callback(result){
    console.log("Resultado: ", result);
}

sumarConCallback(2, 3, callback); //No se pasa la función con paréntesis porque en ese caso se ejecutaría ahí. Nosotros necesitamos que se ejecute andetro de la función sumarConCallback

// FAT ARROW FUNCTION
// Se escriben sin la palabra reservada function y si el código a ejecutar tiene una sola línea no hace falta aclararle el return, está implícito
// const fatArrowFunct = () => arg1 + arg2 --------> En este caso tiene el return implícito
const faf1 = (a, b) => a + b
const faf2 = (a, b) => {
    return a + b; // Es lo mismo pero en la faf1 está implícito el return
}

//FUNCIONES ANÓNIMAS
// Funciones que no tienen nombre, se utilizan en un contexto donde esté ejecutada por otra función (como los CallBacks), permite ser más implícitos en el código pero no se puede reutilizar

sumarConCallback(2, 3, function (r){
    return("Función anónima con resultado: ", r); // es lo mismo que tenemos como ejemplo en el callback pero en vez de declararlo en una función diferente lo declaramos dentro del mismo argumento
});
