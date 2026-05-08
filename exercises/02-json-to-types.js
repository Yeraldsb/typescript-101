// Ejercicio 2 - Convertir estructura JSON a tipos de TypeScript
//
// Vas a transformar esta estructura de datos en tipos de TypeScript.
//
// 🎯 Objetivo:
// - Aprender a representar datos reales con TypeScript
// - Entender cómo se “modela” un objeto complejo
// - Separar estructuras grandes en piezas más pequeñas
// - Pensar en tipos como “formas de datos”, no solo como etiquetas
//
// Importante:
// En proyectos reales no tipas todo en un solo bloque.
// Normalmente separas partes reutilizables (como location o creation).
//
// Cómo comprobar tu trabajo:
// Cuando termines, intenta hacer un console.log del objeto tipado.
// Si TypeScript no se queja y los datos siguen siendo correctos,
// significa que tu modelo de tipos está bien construido.

const data = {
  id: "gfjdvlk934590afdjl41_539s0",
  location: {
    latitude: 52.056881,
    longitude: 5.111532,
  },
  icon: "work",
  name: "My work",
  creation: {
    user: "user.name",
    createdAt: 1568023200,
    lastEdited: 1568629455,
  },
};
