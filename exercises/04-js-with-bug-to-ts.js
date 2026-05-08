// Ejercicio 4
//
// El código de este archivo contiene un bug.
//
// 1. Convierte el código de JavaScript a TypeScript para detectar dónde está el problema.
// 2. Corrige los errores para que el código funcione correctamente.
//
// 🎯 Objetivo:
// - Aprender cómo TypeScript ayuda a encontrar bugs que en JavaScript pasan desapercibidos
// - Practicar tipado de datos que vienen de backend (datos reales e inmutables)
// - Entender la importancia de estructuras inconsistentes en APIs reales
// - Mejorar la seguridad al trabajar con arrays de objetos complejos
//
// Importante:
// Los datos vienen de un backend (simulado aquí).
// NO puedes cambiar la estructura de los datos, solo tiparlos correctamente.
//
// Pistas:
// - Fíjate bien en las propiedades: no todos los objetos son iguales
// - Algunos objetos tienen "uuid" y otros tienen "id" → esto es importante
// - TypeScript te ayudará a detectar dónde falla el código
// - Puede que necesites unions o tipos opcionales
//
// Cómo comprobar tu trabajo:
// - Convierte a TypeScript
// - Arregla los errores que aparezcan
// - Ejecuta console.log del resultado final
// - Si todo funciona sin errores y el resultado es correcto,
//   entonces has encontrado y solucionado el bug correctamente

var playlistCollection = [
  {
    uuid: "8c90b449-8843-43ca-951a-3921425e3528",
    type: "public",
    title: "TGIF Party",
    sharedWithUsers: [
      {
        uuid: "c1049ff1-571f-41bd-824d-7a3e79bca18c",
        displayName: "Henk",
      },
      {
        uuid: "e1a8294e-b6ba-4254-be7b-bed073ec5f3a",
        displayName: "John",
      },
    ],
    songUuids: [
      "209e383d-cafa-4a2c-875e-717dcc363d89",
      "44f971c9-65e3-4b94-9723-92a0ae1cd6fc",
      "7a9f596b-62b5-4df6-8c81-4f2a30728a55",
    ],
  },
  {
    id: "a1ed63a6-18f2-4541-bc57-5fdcaf9851ea",
    type: "private",
    title: "Drive list",
    songUuids: [
      "ecd4d186-007e-4610-9b05-9b7972e84827",
      "7f1d560b-6a12-434a-9b32-93d4fc0d6dcf",
      "cfcd5f4f-02f9-4d83-933f-64260769c5fa",
      "05f7d19c-07bc-44ed-94cb-4e61cf848adb",
    ],
  },
  {
    id: "1b6bb653-9642-4283-bef1-b13754dab894",
    type: "public",
    title: "Programming",
    sharedWithUsers: [
      {
        uuid: "e1a8294e-b6ba-4254-be7b-bed073ec5f3a",
        displayName: "John",
      },
    ],
    songUuids: ["cfcd5f4f-02f9-4d83-933f-64260769c5fa"],
  },
];

function getPlaylistsSharedWithUserUuid(playlists, userUuid) {
  var sharedPlaylists = playlists.filter((playlist) => {
    return (
      playlist.sharedWithUsers.find((user) => user.uuid === userUuid) !==
      undefined
    );
  });
  return sharedPlaylists;
}

var playListsSharedWithUuid = getPlaylistsSharedWithUserUuid(
  playlistCollection,
  "e1a8294e-b6ba-4254-be7b-bed073ec5f3a"
);

console.log(playListsSharedWithUuid);