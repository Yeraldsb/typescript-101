// ======================================================
// TYPESCRIPT BASICS FOR JAVASCRIPT DEVELOPERS
// ======================================================

// INSTALACIÓN:
//
// npm install -g typescript ts-node
//
// Ejecutar TypeScript:
// ts-node index.ts
//
// Compilar manualmente:
// tsc index.ts
//
// IMPORTANTE:
// TypeScript NO se ejecuta en el navegador o en Node.js.
// Primero TypeScript se convierte a JavaScript.
//
// TypeScript:
// const age: number = 23;
//
// JavaScript generado:
// const age = 23;
//
// TypeScript existe principalmente DURANTE el desarrollo.
// Su objetivo es ayudarte a detectar errores ANTES de ejecutar el código.

// ======================================================
// VSCode EXTENSIONS
// ======================================================

// Recommended:
// - JS & TS Nightly
// - Code Runner

// Code Runner hotkey:
// ctrl + option + n

// Code Runner uses:
// ts-node <file>

// ======================================================
// HELPER
// ======================================================

const log = (text: string) => {
  console.log(`\x1b[30m\n${text}:\x1b[0m`);
};

// ======================================================
// QUICK EXAMPLE
// ======================================================

// TypeScript nos permite definir la "forma"
// que debe tener un objeto.

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Frank",
  age: 23,
};

console.log(person.name);
console.log(person.age);

// Esto NO funcionaría:
// const person2: Person = {
//   name: "John",
// };

// ERROR:
// Property 'age' is missing

// BENEFICIO:
// TypeScript detecta propiedades faltantes
// antes de ejecutar el programa.

// ======================================================
// TYPE ANNOTATIONS
// ======================================================

log("Type Annotations");

// Las annotations sirven para especificar
// qué tipo de dato esperamos.
//
// Esto ayuda a:
// - detectar errores temprano
// - mejorar autocomplete
// - hacer el código más mantenible
// - evitar bugs comunes de JavaScript

// ======================================================
// STRING
// ======================================================

let myName: string = "Frank";

// myName = 20;
// ERROR:
// Type 'number' is not assignable to type 'string'

// ======================================================
// NUMBER
// ======================================================

let age: number = 23;

// ======================================================
// BOOLEAN
// ======================================================

let isMarried: boolean = false;

console.log(myName, age, isMarried);

// ======================================================
// TYPE INFERENCE
// ======================================================

log("Type Inference");

// Type Inference significa que TypeScript
// puede adivinar automáticamente el tipo
// basado en el valor inicial.

// No hace falta escribir ": string"
// porque TypeScript ya entiende que esto es un string.

let technology = "TypeScript";

// technology = 10;
// ERROR:
// Type 'number' is not assignable to type 'string'

// ======================================================
// JAVASCRIPT VS TYPESCRIPT
// ======================================================

// JavaScript:
let jsVariable = "hello";
//jsVariable = 20; // válido en JS

// TypeScript:
let tsVariable = "hello";

// tsVariable = 20;
// ERROR

// BENEFICIO:
// TypeScript mantiene consistencia en los datos.

// ======================================================

let isTypeScriptHard = true;

isTypeScriptHard = false;

// isTypeScriptHard = "yes";
// ERROR

console.log(isTypeScriptHard);

// ======================================================
// ANY TYPE
// ======================================================

log("Any Type");

// "any" desactiva completamente TypeScript.
//
// Básicamente es volver a JavaScript.
//
// Debe evitarse siempre que sea posible.

let color: any = "purple";

color = 23;
color = false;
color = [];
color = {};

// Todo esto es válido con any.

console.log(color);

// PROBLEMA:
//
// TypeScript ya NO puede ayudarte.
//
// Ejemplo:

let value: any = "hello";

// Esto compila aunque puede romperse:
console.log(value.toUpperCase());

// Luego:
value = 20;

// Esto ahora rompería en runtime:
// console.log(value.toUpperCase())

// BENEFICIO DE EVITAR "any":
// Más seguridad y menos bugs inesperados.

// ======================================================
// FUNCTION PARAMETERS
// ======================================================

log("Function Parameters");

// En TypeScript podemos definir
// qué tipos recibe una función.

// ======================================================
// JAVASCRIPT
// ======================================================

function addJS(num, addend) {
  return num + addend;
}

console.log(addJS(2, 3)); // 5
console.log(addJS("2", 3)); // "23"

// JavaScript NO evita este problema.

// ======================================================
// TYPESCRIPT
// ======================================================

function add(num: number, addend: number) {
  return num + addend;
}

const addition = add(28, 5);

console.log(addition);

// add("28", 5);

// ERROR:
// Argument of type 'string'
// is not assignable to parameter of type 'number'

// BENEFICIO:
// Bugs detectados antes del runtime.

// ======================================================
// ARROW FUNCTIONS
// ======================================================

const multiply = (x: number, y: number) => {
  return x * y;
};

const multiplication = multiply(14, 2);

console.log(multiplication);

// ======================================================
// DEFAULT PARAMETERS
// ======================================================

log("Default Parameters");

// Podemos definir valores por defecto.

function greet(name: string = "User") {
  return `Hello ${name}`;
}

const greeting = greet();

console.log(greeting);

// ======================================================
// RETURN TYPES
// ======================================================

log("Return Types");

// También podemos tipar
// lo que una función devuelve.

function square(num: number): number {
  return num * num;
}

const squaring = square(10);

console.log(squaring);

// ======================================================
// ARROW FUNCTION RETURN TYPES
// ======================================================

const squareFn = (num: number): number => {
  return num * num;
};

console.log(squareFn(5));

// ======================================================
// VOID
// ======================================================

log("Void");

// void significa:
//
// "esta función no retorna nada"

function printMessage(message: string): void {
  console.log(`Message: ${message}`);
}

printMessage("TypeScript is awesome");

// ======================================================
// NEVER
// ======================================================

log("Never");

// never significa:
//
// "esto nunca debería terminar"

// ======================================================
// FUNCTION THAT ALWAYS THROWS
// ======================================================

function throwError(msg: string): never {
  throw new Error(msg);
}

// ======================================================
// INFINITE LOOP
// ======================================================

function infiniteLoop(): never {
  while (true) {}
}

// ======================================================
// NEVER VARIABLE
// ======================================================

let x: never;

// x = "hello";

// ERROR:
// Type 'string' is not assignable to type 'never'

// ======================================================
// ARRAYS
// ======================================================

log("Arrays");

// En TypeScript podemos definir
// qué tipo de elementos tendrá un array.

// ======================================================
// ARRAY OF NUMBERS
// ======================================================

const numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers);

// ======================================================
// ARRAY OF STRINGS
// ======================================================

const strings: string[] = [
  "Billie",
  "Jean",
  "is",
  "not",
  "my",
  "lover",
];

console.log(strings);

// ======================================================
// INVALID ARRAY VALUES
// ======================================================

// const invalidNumbers: number[] = [1, 2, "hello"];

// ERROR:
// Type 'string' is not assignable to type 'number'

// BENEFICIO:
// Evita mezclar tipos accidentalmente.

// ======================================================
// MULTI DIMENSIONAL ARRAYS
// ======================================================

log("Matrices");

// Arrays dentro de arrays.

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(matrix);

// ======================================================
// OBJECTS
// ======================================================

log("Objects");

// TypeScript puede validar
// la estructura de un objeto.

// ======================================================

const personA: {
  firstName: string;
  age: number;
} = {
  firstName: "Frank",
  age: 23,
};

console.log(personA);

// ======================================================
// INVALID OBJECT
// ======================================================

// const personB: {
//   firstName: string;
//   age: number;
// } = {
//   firstName: "Frank",
// };

// ERROR:
// Property 'age' is missing

// ======================================================
// OBJECT AS FUNCTION RETURN
// ======================================================

function printUser(): {
  name: string;
  age: number;
} {
  return {
    name: "Frank",
    age: 23,
  };
}

console.log(printUser());

// ======================================================
// TYPE ALIASES
// ======================================================

log("Type Aliases");

// Un type alias nos permite reutilizar tipos.
//
// Esto evita repetir estructuras.

// ======================================================

type Product = {
  brand: string;
  quantity: number;
};

function printProduct(product: Product) {
  console.log(
    `Product: ${product.brand} | Quantity: ${product.quantity}`,
  );
}

const myProduct: Product = {
  brand: "iPhone",
  quantity: 3,
};

printProduct(myProduct);

// BENEFICIO:
// Código más limpio y reutilizable.

// ======================================================
// OPTIONAL PROPERTIES
// ======================================================

log("Optional Properties");

// El símbolo ? significa:
//
// "esta propiedad es opcional"

// ======================================================

type Book = {
  title: string;
  author: string;
  copiesSold?: number;
  readonly publisher: string;
};

const book: Book = {
  title: "Designing Data-Intensive Applications",
  author: "Martin Kleppmann",
  publisher: "O'Reilly",
};

console.log(book);

// Esto sí funciona:
book.author = "Martin";

// Esto NO funciona:
// book.publisher = "Another Publisher";

// ERROR:
// Cannot assign to 'publisher'
// because it is a read-only property

// BENEFICIO:
// readonly ayuda a prevenir mutaciones accidentales.

// ======================================================
// UNION TYPES
// ======================================================

log("Union Types");

// Unions permiten múltiples tipos posibles.

// ======================================================

function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId(123);
printId("ABC-123");

// printId(true);

// ERROR:
// Argument of type 'boolean'
// is not assignable

// ======================================================

type RequestStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

let currentStatus: RequestStatus = "idle";

currentStatus = "success";

// currentStatus = "finished";

// ERROR:
// Type '"finished"'
// is not assignable

console.log(currentStatus);

// BENEFICIO:
// Muy útil para estados controlados.

// ======================================================
// ARRAYS WITH UNION TYPES
// ======================================================

const items: (number | string)[] = [
  1,
  2,
  "hello",
  "world",
];

console.log(items);

// ======================================================
// LITERAL TYPES
// ======================================================

log("Literal Types");

// Literal types permiten valores exactos.

// ======================================================

let colors: "red" | "blue" | "green";

colors = "red";

// colors = "yellow";

// ERROR

// ======================================================

let isTrue: true;

isTrue = true;

// isTrue = false;

// ERROR

// ======================================================

let number: 1 | 2 | 3;

number = 1;

// number = 4;

// ERROR

console.log(colors, isTrue, number);

// ======================================================
// TUPLES
// ======================================================

log("Tuples");

// Una tuple es un array con:
//
// - cantidad fija de elementos
// - orden específico
// - tipos específicos

// ======================================================

let myTuple: [string, number] = [
  "hello",
  23,
];

console.log(myTuple);

// ======================================================
// DESTRUCTURING
// ======================================================

let [first, second] = myTuple;

console.log(first);
console.log(second);

// ======================================================
// INVALID TUPLE
// ======================================================

// let invalidTuple: [string, number] = [
//   "hello",
//   "world",
// ];

// ERROR:
// Type 'string'
// is not assignable to type 'number'

// ======================================================
// ENUMS
// ======================================================

log("Enums");

// Un enum representa
// un conjunto de constantes relacionadas.

// ======================================================

enum WeatherConditions {
  Sunny,
  Cloudy,
  Rainy,
  Snowy,
}

console.log(WeatherConditions);

const currentWeather =
  WeatherConditions.Cloudy;

console.log(currentWeather);

// ======================================================
// STRING ENUMS
// ======================================================

enum WeatherConditionsNamed {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}

console.log(WeatherConditionsNamed);

const currentWeatherNamed =
  WeatherConditionsNamed.Cloudy;

console.log(currentWeatherNamed);

// ======================================================
// IMPORTANT NOTE
// ======================================================

// Actualmente muchos developers prefieren:
//
// type Weather = "sunny" | "cloudy";
//
// en lugar de enums simples.
//
// Porque generan menos JavaScript
// y suelen ser más simples.

// ======================================================
// FINAL NOTE
// ======================================================

// TypeScript NO reemplaza JavaScript.
//
// TypeScript ES JavaScript
// con herramientas extra para:
//
// - detectar errores
// - mejorar autocomplete
// - hacer el código más mantenible
// - trabajar mejor en proyectos grandes
// - evitar bugs comunes
//
// El objetivo principal NO es escribir más código.
//
// El objetivo es:
// escribir código más seguro.