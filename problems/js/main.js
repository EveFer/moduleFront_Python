/**
 * 2.- Solicitar al usuario cuantos numero desea ingresar, y guardar cada numero como un item de un array

    2.1.- Validar cada item es par o impar en imprimirlo en consola.
    
 * Algoritmo
 * 1.- Solicitar al usuario cuantos numeros va ingresar y almacenarlo en un variable numbersInput.
 * 2.- Declarar un arreglo vacio arrayNumber = [] donde se van almacenar cada numero
 * 3.- Solicitar numero hasta numbersInput veces: for(let index = 0; index < numbersInput; i++ )
 *        3.1.- solicitar  el numero con prompt('ingresa el numero', i+1) convertirlo a entero y almacenarno en una variable -> number
 *        3.2.- arrayNumber.push(number)
 */

// const arrayNumber = []
// const numbersInput = parseInt(prompt('Cuantos numeros deseas ingresar'))

// for(let index = 0; index < numbersInput; index++) {
//     // console.log(index)
//     const number = parseInt(prompt(`Ingresa el numero ${index+1}`))
//     console.log('iteracion: ', index)
//     console.log(number)
//     arrayNumber.push(number)
//     console.log(arrayNumber)
// }

// for(let index = 0; index < arrayNumber.length; index++) {
//     console.log(arrayNumber[index])
//     if(arrayNumber[index]%2 === 0) {
//         console.log(`El numero ${arrayNumber[index]} es PAR`)
//     }else {
//         console.log(`El numero ${arrayNumber[index]} es IMPAR`)
//     }
// }


// declaracion de una funcion
function myFunction () {
    const myVariable = 100
    return myVariable
}

myFunction()



// Arrays - forEach, map, filter, reduce

/**
 * forEach -> no retorna
 * map -> array
 * filter -> array
 * reduce -> Lo que tu le indiques
 */

//  arrayNumber = [20,10,268,39,60]

//  arrayNumber.forEach(function (current, index) {
//     console.log('current', current)
//     console.log('index', index)
//  })
// console.log('-----------------')
//  arrayNumber.forEach((number, index) => {
//     console.log('current', number)
//     console.log('index', index)
//     if(number%2 === 0) {
//         console.log(`El numero ${number} es PAR`)
//     }else {
//         console.log(`El numero ${number} es IMPAR`)
//     }
//  })

/*

3.- Calcular el área de un circulo.

	3.1.-  Pasar el proceso del área de un circulo a una función. 

	3.2.- Pasar el proceso del área de un circulo a una función, recibiendo los parámetros necesarios.

	3.3.- Las funciones deben estar en las 2 diferentes formas de declarar una función (arrow functions y function)



4.- Calcular la circunferencia de un circulo.

	4.1  Pasar el proceso de calcular la circunferencia de un circulo a una función.

	4.2.- Pasar el proceso  de calcular la circunferencia de un circulo a una función, recibiendo los parámetros necesarios.

	3.3.- Las funciones deben estar en las 2 diferentes formas de declarar una función (arrow functions y function)



5.- Dar opciones al usuario donde pueda elegir entre realizar una suma, resta, multiplicación o división, ademas de elegir entre obtener el área o circunferencia de un Circulo

*/


/*
EJERCICIO 6.

Del siguiente arreglo llamada 'arrayNames' obtener de casa nombre la siguiente salida:

Ruben Flores R.B.
Andre Vazquez A.V.
Fernanda Palacios F.P.
George Camarillo G.C.
Ale Paez A.P.

*/

 const newNames = [
     ["Ruben", "Flores"],
     ["Andre", "Vazquez"],
     ["Fernanda", "Palacios"],
     ["Goerge", "Camarillo"],
     ["Ale", "Paez"]
 ]

//  output -> Ruben Flores R.F.

newArray.forEach((arrayNames ,index)=> {
    console.log(arrayNames)
    console.log(arrayNames.join())
    console.log(arrayNames.join().replace(',', ' '))
    arrayNames.forEach((name, index)=> {
        console.log(name.slice(0,1))
    })
})


/*

EJERCICIO 7.

Del siguiente arreglo:

arrayKoders = [
	[
		["name", "Ruben"],
		["lastName", "Alvarez"],
		["generation", 1],
        ["bootcamp": "python"],
        ["score": 90]
	],
	[
		["name", "Andre"],
		["lastName", "Alvarez"],
		["generation", 1],
        ["bootcamp": "python"],
        ["score": 90]
	],
	[
		["name", "Ale"],
		["lastName", "Paez"],
		["generation", 1],
        ["bootcamp": "python"],
        ["score": 98]
	],
	[
		["name", "Juan Pi"],
		["lastName", "López"],
		["generation", 10],
        ["bootcamp": "JavaScript"],
        ["score": 95]
	],
	
		["name", "Cintia"],
		["lastName", "Gomez],
		["generation", 10],
        ["bootcamp": "JavaScript"],
        ["score": 85]
	],
]

- Crear un array de objetos con los koders que se encuentran en el array arrayKoders. quedando de la siguiente manera:

newArrayKoders = [
    {
        name: "Ruben",
        lastName: "Flores",
        generation: 1,
        bootcamp: "python",
        score: 90
    },
    {
        name: "Andre",
        lastName: "Vazquez",
        generation: 1,
        bootcamp: "python",
        score: 90
    },
    .
    .
    .
 Una vez teniendo el array de newArrayKoders obtener los siguientes datos:
   -> Obtener los koders que se encuentren en el Bootcamp de Python
   -> Obtener los koders que se encuentren en el bootcamp de JS
   -> Obtener el promedio general de los todos los koders registrados
   -> DOM -> Pintar los koders en una tabla 
]


*/