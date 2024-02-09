//DECLARACION DE DATOS

const edad: number = 2 ; 

let trasporte: string = "bus";

let esverdadero: boolean = true;
let esFalso: boolean = false;

//definir un objeto con type
type Persona = { nombre: string, edad: number, adulto: boolean } ;
  let persona: Persona = {  nombre: "pepito", edad:50, adulto:true}

// const list --> es literal
const lista: number[] = [1, 2, 3, 100, 200,7854];

// Parte 2: Condicionales

let apellido: string = "Buitrago";
if(apellido == "Buitrago"){
    console.log("Es el apellido de Arturo");
} else {
    console.log("NO es el apellido de Arturo");
}

//Parte 2: Condicionales

let animal: string = "LEON";

if (animal == "felino") {
  console.log("es un gato");
} else if (animal == "canino") {
  console.log("Es un perro");
} else {
  console.log("No es animal domestico");
}

//Parte 3: Funciones

// sin return
function animales(): void {
  console.log("registra tu animal");
}
animales();

// //con return

function sumarVarios(...numeros: number[]): number {
  return numeros.reduce((total, num) => total + num, 0);
  }

const suma1=sumarVarios(1, 5, 5, 6, 6, 5);
console.log(' el resultado es: ',(suma1));

// Funciones con Parámetros Opcionales y Predeterminados:

//parametro opcional
const multiplicacion = (a: number, b:number): number => {
  return a * b;
}
multiplicacion(5,8);
console.log("La Multiplicacion es:", multiplicacion(5,8));

//parametro Predeterminado

const resta = (a: number= 90, b:number = 80 , c:number): number => {
  return a - b - c;
}
resta(10,3,9)
console.log("La resta es:", resta (10,3,8));
