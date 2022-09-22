console.log("probando")


// * HOISTING (solo aplica para var y function, algo que ocurria con esa palabra)

// hoisting es la accion en la que JS hace una pre-lectura del codigo
// buscar todas las variables creadas con var
// las sube al inicio del codigo, SIN SU VALOR.

console.log("antes de declarar", myName);
// var myName = undefined; <= ESTO ES HOISTING
// console.log("antes de declarar", myAge);
// generaba muchos dolores de cabeza. BUGS. era dificil de solventar.

// ... mucho codigo

var myName = "Jorge";
let myAge = 31;

console.log("despues de declarar", myName)

// ... muchos codigo

var myName = "Patricio";
// let myAge = 20;

console.log("despues de declarar 2da vez", myName)
console.log("despues de declarar 2da vez", myAge)


// hoisting con funciones

// hoisting en functiones
// buscar todas las funciones creadas con "function"
// las sube al inicio del codigo.
// su valor es la funcion tal cual como creada.
// en funciones, utiliza la referencia. // ref QWER

console.log( "antes de declarar", myFunction() ) // ref QWER

function myFunction() {
  return "hello"
} // ref QWER
const myFunctionBetter = () => {

}

console.log( "despues de declarar", myFunction() )

// ... mucho codigo

function myFunction() {
  return "bye"
}// ref POIU
// const myFunctionBetter = () => {

// } // no lo permite JS, no hace hoisting.

console.log( "despues de declarar 2da vez", myFunction() )





// * SCOPES

// cualquier segmento de JS en donde escribimos codigo
// está definido cada vez que abrimos { } (excepto objetos)

{
  // abriendo un nuevo scope
}

// 1. SCOPE GLOBAL
let unVar = "algo" // => variable esta creada en el scope global

const arrowFunc = () => {
  // 2. scope de function
  let varDentroDeFuncion = "algo" // => SOLO ESTA CREADA DENTRO DE LA FUNCION
  if (5 === 5) {
    // 3. otro scope. Scope de Boque.

  }
}



// BLOCK SCOPE

{
  let myString1 = "Variable con let" // solo existe dentro de este scope
  var myString2 = "Variable con var" // por hoisting, se crea en el scope global
  myString3 = "Variable sin declarar" // creando la variable en scope global
}

// console.log(myString1)
console.log(myString2) // no usar var
console.log(myString3) // nunca crear variables sin palabra let o const

for (let i = 0; i < 10; i++) {
  // siempre declara variables, especialmente en loops
}



function someString() {
  // scope de function
  let str1 = "String con let"
  var str2 = "String con var" // hace hoisting SOLO dentro de la funcion
  str3 = "String sin declarar" // se crea en el scope global
}

someString()

// console.log(str1)
// console.log(str2)
console.log(str3)


// * CONCLUSIONES

/* 
1. siempre declaren sus variables
2. siempre usen let o const. Nunca var.
3. siempre que sea posible, utilizen funciones de flecha.
4. tengan todos estos coceptos en cuenta. Y estudienlos, sobre todo para entrevistas tecnicas.
*/




// * OBJETOS


// syntaxis
// {
//   nombreDePropiedad: valorDePropiedad
//          key       :     value
//                propiedad
// }

let headPhones = {
  price: 100,
  isNew: false,
  brand: "SteelSeries",
  "max volume": 80,
  // compradores: ["Juvixa", "Borja", "Javier"]
  // someArr: [],
  // otherObj: {},
  // propFunction: function() {
  //   // ... codigo cualquier
  // }
}

// console.log( headPhones.compradores[0] )

console.log(headPhones)

// notacion de punto
console.log(headPhones.price) // 99% de los casos

// notacion de corchetes
console.log(headPhones["brand"])

// por que usamos notacion de corchetes
console.log(headPhones["max volume"])

let nombreDePropiedad = "isNew"

console.log(headPhones[nombreDePropiedad])
// console.log(headPhones["isNew"]) // paso 1
// console.log(false) // paso 2


// modificar propiedad del objeto


headPhones.isNew = true; // modificar
console.log("despues de modificar isNew", headPhones)

headPhones.color = "amarillo" // agregar
console.log("despues de agregar color", headPhones)

delete headPhones.brand;
console.log("despues de borrar brand", headPhones)


// metodos y bucles sobre objectos

console.log( Object.keys(headPhones) ) // array con todos los nombres de propiedades
console.log( Object.values(headPhones) ) // array con todos los valores de propiedades


for (let key in headPhones) {
  console.log(key)
  console.log(headPhones[key])
}



const ironhacker = {
  firstName: 'marko',
  age: 39,
  favoriteLanguage: 'JavaScript',
  isSatisfied: true,
  'works at': 'Google',
  isRemote: false
}

for (let key in ironhacker) {
  if (key === "works at") {
    console.log("si la tiene")
  }
}

if (ironhacker["works at"] !== undefined) {
  console.log("si la tiene")
}

console.log( ironhacker.hasOwnProperty("works at") )
if ( ironhacker.hasOwnProperty("works at") === true ) {
  console.log("si la tiene")
}

console.log( "patata" in ironhacker )
if ( "patata" in ironhacker ) {
  console.log("si la tiene")
} else {
  console.log("no la tiene")
}



// ESTRUCTURA DE DATA


const superheroes = [
  {
    name: "Batman",
    location: "Gotham",
    superpowers: true, // false
  },
  {
    name: "Superman",
    location: "Metropolis",
    superpowers: true,
  },
  {
    name: "Aquaman",
    location: "Unknown", // "Atlantis"
    superpowers: true,
  },
  {
    name: "Wonder Woman",
    location: "Themyscira",
    superpowers: true,
  },
];

console.log( superheroes[0].name )
console.log( superheroes[0]["name"] )
// la propiedad name, del primer elemento array

superheroes[0].superpowers = false;

// superheroes[2].location = "Atlantis"


for (let i = 0; i < superheroes.length; i++) {
  console.log( superheroes[i] )
  if (superheroes[i].name === "Aquaman") {
    // cambiar location a "Atlantis"
    superheroes[i].location = "Atlantis"
  }
}

let newSuperhero = {
  name: "Peacemaker",
  location: "Unknown",
  superpowers: false,
}

superheroes.push(newSuperhero)


console.log(superheroes)


function hasSuperpowers(oneSuperhero) {
  // let oneSuperhero = {
  //   name: "Batman",
  //   location: "Gotham",
  //   superpowers: true, // false
  // }
  if (oneSuperhero.superpowers === true) {
    return `te tocó: ${oneSuperhero.name}. YAY, tienes suerte`
  } else {
    return `te tocó: ${oneSuperhero.name}. meh`
  }
}

// console.log( hasSuperpowers(superheroes[0]) )

// quiero ejecutar la funcion por cada elemento del array

for (let i = 0; i < superheroes.length; i++) {
  // console.log(superheroes[i])
  let eachSuperhero = superheroes[i]
  // hasSuperpowers(superheroes[i])
  
  // console.log( hasSuperpowers(eachSuperhero) )
}

// for (let i in superheroes) {
//   // console.log(superheroes[i])
//   let eachSuperhero = superheroes[i]
//   // hasSuperpowers(superheroes[i])
  
//   console.log( hasSuperpowers(eachSuperhero) )
// }

// function que nos de como resultado un superhero aleatorio del array



// Math.random + Math.floor
function randomSuperhero(arrayOfHeroes) {

  //                  0 - 0.999999999999
  let randomNumber = Math.random() * arrayOfHeroes.length // 0 - 4.999999999999
  let randomPosition = Math.floor(randomNumber)
  // console.log( randomPosition )

  // arrayOfHeroes[ /* ele indice random */]
  return arrayOfHeroes[randomPosition]

}

let theRandomSuperhero = randomSuperhero(superheroes)
console.log( hasSuperpowers(theRandomSuperhero) )


