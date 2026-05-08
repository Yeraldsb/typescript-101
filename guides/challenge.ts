// ======================================================
// TYPESCRIPT CHALLENGES
// ======================================================

// OBJETIVO:
//
// Estos ejercicios están pensados para alguien
// que YA entiende las bases de JavaScript
// y ya vio:
//
// - annotations
// - arrays
// - objects
// - functions
// - unions
// - optional properties
// - tuples
// - readonly
//
// La idea NO es memorizar sintaxis.
//
// La idea es:
//
// "aprender a pensar en tipos"
//
// ======================================================
// CHALLENGE 1 - FIX THE TYPES
// ======================================================

log("Challenge 1");

// INSTRUCCIONES:
//
// Este código funciona en JavaScript,
// pero tiene problemas de consistencia.
//
// Tu trabajo es:
//
// 1. Agregar tipos correctos.
// 2. Hacer que TypeScript detecte errores.
// 3. Mantener el mismo comportamiento.

// ======================================================

let username = "Frank";
let points = 100;
let isOnline = true;

// Intenta luego hacer:
//
// username = 20
// points = "hello"
// isOnline = "yes"
//
// TypeScript debería impedirlo.

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// CHALLENGE 2 - JAVASCRIPT BUG
// ======================================================

log("Challenge 2");

// INSTRUCCIONES:
//
// JavaScript permite esto:
//
// "20" + 5 -> "205"
//
// Tu objetivo:
//
// 1. Crear una función llamada "sum".
//
// 2. Debe aceptar SOLO números.
//
// 3. Debe retornar la suma.
//
// 4. Intenta luego pasar un string
//    para comprobar que TypeScript
//    detecta el error antes del runtime.

// ======================================================
// EJEMPLO ESPERADO
// ======================================================

// sum(10, 5) -> 15
// sum("10", 5) -> ERROR

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// CHALLENGE 3 - OBJECT SHAPE
// ======================================================

log("Challenge 3");

// INSTRUCCIONES:
//
// En TypeScript importa MUCHO
// la "forma" del objeto.
//
// Tu trabajo:
//
// 1. Crear un type llamado "User".
//
// 2. Debe tener:
//
// - id
// - username
// - email
// - isAdmin
//
// 3. Crear un usuario válido.
//
// 4. Luego intenta:
//
// - eliminar propiedades
// - cambiar tipos
// - agregar propiedades incorrectas
//
// Observa cómo TypeScript protege
// la estructura del objeto.

// ======================================================
// EJEMPLO
// ======================================================

// const user: User = {
//   id: 1,
//   username: "frank",
//   email: "frank@example.com",
//   isAdmin: false,
// }

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// CHALLENGE 4 - FUNCTION RETURN TYPES
// ======================================================

log("Challenge 4");

// INSTRUCCIONES:
//
// Crea una función llamada "createMovie".
//
// Debe:
//
// 1. Recibir:
//
// - title
// - year
//
// 2. Retornar un objeto.
//
// 3. El objeto debe tener:
//
// - title
// - year
// - isClassic
//
// REGLA:
//
// Si la película es menor a 2000,
// isClassic debe ser true.

// ======================================================
// EJEMPLO
// ======================================================

// createMovie("Matrix", 1999)
//
// RESULTADO:
// {
//   title: "Matrix",
//   year: 1999,
//   isClassic: true
// }

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// CHALLENGE 5 - ARRAYS OF OBJECTS
// ======================================================

log("Challenge 5");

// INSTRUCCIONES:
//
// Uno de los casos MÁS comunes en TypeScript
// es trabajar con arrays de objetos.
//
// Tu trabajo:
//
// 1. Crear un type llamado "Product".
//
// Debe contener:
//
// - id
// - name
// - price
//
// 2. Crear un array de productos.
//
// 3. Agregar mínimo 3 productos.
//
// 4. Hacer un console.log de:
//
// - todos los productos
// - el nombre del primer producto
// - el precio del último producto

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// CHALLENGE 6 - OPTIONAL PROPERTIES
// ======================================================

log("Challenge 6");

// INSTRUCCIONES:
//
// A veces NO todos los datos existen.
//
// Para eso usamos propiedades opcionales.
//
// Tu trabajo:
//
// 1. Crear un type llamado "Game".
//
// Debe tener:
//
// - title
// - platform
// - multiplayer (optional)
//
// 2. Crear:
//
// - un juego con multiplayer
// - un juego sin multiplayer
//
// 3. Mostrar ambos por consola.

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// CHALLENGE 7 - READONLY
// ======================================================

log("Challenge 7");

// INSTRUCCIONES:
//
// readonly sirve para proteger valores
// que NO deberían cambiar.
//
// Tu trabajo:
//
// 1. Crear un type llamado "Account".
//
// Debe tener:
//
// - readonly id
// - username
// - balance
//
// 2. Crear una cuenta.
//
// 3. Modificar:
//
// - username
// - balance
//
// 4. Intentar modificar:
//
// - id
//
// TypeScript debería impedirlo.

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// CHALLENGE 8 - UNION TYPES
// ======================================================

log("Challenge 8");

// INSTRUCCIONES:
//
// Las unions son MUY usadas
// para controlar estados.
//
// Tu trabajo:
//
// 1. Crear un type llamado "LoadingState".
//
// Debe permitir SOLO:
//
// - "idle"
// - "loading"
// - "success"
// - "error"
//
// 2. Crear una variable usando ese type.
//
// 3. Cambiar entre estados válidos.
//
// 4. Intentar usar:
//
// "finished"
//
// y comprobar el error.

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// CHALLENGE 9 - MIXED FUNCTION PARAMETERS
// ======================================================

log("Challenge 9");

// INSTRUCCIONES:
//
// Crea una función llamada "printUserId".
//
// Debe aceptar:
//
// - number
// - string
//
// Debe mostrar:
//
// User ID: <valor>
//
// BONUS:
//
// Intenta pasar:
//
// - boolean
// - object
//
// y observa los errores.

// ======================================================
// EJEMPLO
// ======================================================

// printUserId(123)
// printUserId("ABC-123")

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// CHALLENGE 10 - TUPLES
// ======================================================

log("Challenge 10");

// INSTRUCCIONES:
//
// Las tuples son útiles cuando:
//
// - el orden importa
// - la cantidad de elementos es fija
//
// Tu trabajo:
//
// 1. Crear una tuple llamada "httpResponse".
//
// Debe contener:
//
// - statusCode (number)
// - message (string)
//
// 2. Crear una respuesta válida.
//
// 3. Hacer destructuring.
//
// 4. Mostrar ambos valores.

// ======================================================
// EJEMPLO
// ======================================================

// [200, "OK"]

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// CHALLENGE 11 - COMBINING TYPES
// ======================================================

log("Challenge 11");

// INSTRUCCIONES:
//
// Ahora vamos a combinar conceptos.
//
// Tu trabajo:
//
// 1. Crear un type llamado "Employee".
//
// Debe tener:
//
// - id
// - name
// - role
//
// 2. role SOLO puede ser:
//
// - "developer"
// - "designer"
// - "manager"
//
// 3. Crear mínimo 2 empleados.
//
// 4. Intentar usar un role inválido.
//
// 5. Crear un array de empleados.

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// CHALLENGE 12 - MINI REAL WORLD EXERCISE
// ======================================================

log("Challenge 12");

// INSTRUCCIONES:
//
// Simula un mini ecommerce.
//
// Tu trabajo:
//
// 1. Crear un type llamado "CartItem".
//
// Debe tener:
//
// - id
// - productName
// - price
// - quantity
// - optional discount
//
// 2. Crear mínimo 3 productos.
//
// 3. Crear una función:
//
// printCartItem(item)
//
// 4. Debe mostrar:
//
// Product: iPhone
// Price: $999
// Quantity: 2
//
// 5. BONUS:
//
// Si tiene discount:
//
// Discount: 10%

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================



// ======================================================
// FINAL CHALLENGE
// ======================================================

log("Final Challenge");

// OBJETIVO:
//
// Crear tu propio mini sistema.
//
// IDEAS:
//
// - Netflix
// - Spotify
// - Steam
// - Pokemon
// - Banco
// - Social Media
// - Tasks App
// - Notes App
//
// REQUISITOS:
//
// Debe usar:
//
// - type aliases
// - arrays
// - objects
// - functions
// - unions
// - optional properties
// - readonly
//
// IMPORTANTE:
//
// Piensa:
//
// "¿Cómo representaría estos datos
// correctamente usando TypeScript?"
//
// Ese es el verdadero objetivo
// de aprender TypeScript.

// ======================================================
// TU CÓDIGO AQUÍ
// ======================================================