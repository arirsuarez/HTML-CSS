console.log('Hola Mundo@!')
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

//String
let miPrimeraVariable = "Mi primera variable!"
console.log(miPrimeraVariable);

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

console.log(aNumber, miBooleanFalse, anotherNumber);
console.log(sumVar);

//Objeto
// Para declarar propiedades dentro de un objeto se utiliza nombreDeProp + ':' + valor + ',' sin utilizar el let ni var.
const miPrimerObjecto = {}

const miObjeto = {
    aNumber: 14,
    aString: "Pearl Jam",
    condition: true, 
}
console.log(miObjeto);
console.log(miObjeto.aString);

//Arreglo

const arrEmpty = []
const myArr = [1, 2, miPrimeraVariable, miObjeto]
console.log(myArr);

// Para insertar un elemento al arreglo se utiliza el método .push()

arrEmpty.push(17, "Agregué el 17 y este Strng con arrEmpty.push(17 + String)");
console.log(arrEmpty);
