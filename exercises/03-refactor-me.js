// Ejercicio 3
//
// Vas a refactorizar este código de JavaScript “clásico” basado en constructor functions
// a TypeScript moderno usando clases, interfaces o tipos.

// 🎯 Objetivo:
// - Aprender a transformar código antiguo de JavaScript a TypeScript moderno
// - Entender cómo TypeScript reemplaza constructor functions por clases
// - Mejorar la seguridad de tipos (evitar valores incorrectos en runtime)
// - Hacer el código más legible, estructurado y mantenible

// Importante:
// Este patrón era muy común en JavaScript antes de las clases modernas.
// En TypeScript, lo normal es usar clases o tipos para modelar este tipo de estructuras.

// Pistas:
// - Este “User” probablemente debería ser una class
// - Define correctamente los tipos de propiedades (name, type, age, occupation)
// - Asegúrate de tipar correctamente los métodos (setAge, setOccupation)
// - Evita que cualquier propiedad acepte cualquier valor sin control

// Cómo comprobar tu trabajo:
// Al final, crea varios usuarios, modifica alguno con métodos
// y usa console.log(users).
// Si no hay errores de TypeScript y todo funciona igual,
// tu refactorización está bien hecha y es más segura.

function User(name, type = "unknown") {
  this.name = name;
  this.type = type;
  this.age = 0;
  this.occupation = "unknown";

  this.setAge = function (age) {
    if (age > 0) {
      this.age = age;
    }
  };

  this.setOccupation = function (occupation) {
    this.occupation = occupation;
  };
}

const users = [];
users.push(new User("Freek", "user"));
users.push(new User("Anna", "admin"));
users.push(new User("Secret spy person"));

users[2].setOccupation("Spy");

console.log(users);