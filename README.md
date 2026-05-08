# 🔷 typescript 101

Guía con ejercicios, conceptos y ejemplos prácticos sobre **TypeScript** para entender:

- qué problema resuelve TypeScript
- por qué se usa tanto
- qué ventajas aporta
- cómo ayuda a evitar bugs reales
- cómo mejora la experiencia de desarrollo
---

# 📚 ¿Qué es TypeScript?

TypeScript es un lenguaje que añade tipos a JavaScript para describir cómo deben ser tus datos y detectar errores antes de ejecutar el código. Gracias a esto, el editor puede avisarte cuando usas datos de forma incorrecta.

Eso significa que:

- Todo código **JavaScript** válido también es **TypeScript** válido.
- TypeScript añade herramientas extra sobre JavaScript.


```text
JavaScript:      | "hola" + 42 => "hola42" (oops)
TypeScript:      | string + number => ❌ error detectado antes de ejecutar
```

---

# 🧩 Tipos de datos básicos

| Tipo        | Ejemplo                     | Qué representa            |
|------------|----------------------------|--------------------------|
| `string`   | `"Hola"`                   | Texto                    |
| `number`   | `42`                       | Números                  |
| `boolean`  | `true`                     | Verdadero/Falso          |
| `array`    | `["JS","TS"]`              | Lista de cosas           |
| `any`      | `42` o `"Hola"`            | Cualquier cosa (evitar) |

```typescript
let nombre: string = "Juan";
let edad: number = 30;
let activo: boolean = true;
let hobbies: string[] = ["leer", "jugar"];
let cosas: any = 123; // cualquier tipo
```

### ⚠️ JavaScript vs TypeScript

<details>
<summary>Ver ejemplo</summary>

```javascript
let age = "23";

console.log(age + 10);
```
👉 Resultado: `2310`
- JavaScript no detecta el problema.


```typeScript
let age: number = 23;

console.log(age + 10);
```
👉 Resultado: `33`
- `Y si intentas: `age = "23";`
- **TypeScript muestra:** `Type 'string' is not assignable to type 'number'`
- El error se detecta ANTES de ejecutar el programa.

</details>

---

# 🧠 Conceptos de TypeScript

## 🔹 ¿Qué problema resuelve TypeScript?

JavaScript es extremadamente flexible.

Eso es bueno para programar rápido, pero también puede generar:

- errores difíciles de detectar
- datos inconsistentes
- bugs en producción
- problemas en proyectos grandes

TypeScript ayuda validando el código DURANTE el desarrollo.

---

# Beneficios de TypeScript

✅ Detecta errores antes del runtime  
✅ Mejor autocomplete  
✅ Refactors más seguros  
✅ Código más mantenible  
✅ Más claridad en equipos  
✅ Mejor documentación implícita  
✅ Evita inconsistencias de datos  
✅ Más seguridad en proyectos grandes  

---

# ⚠️ Recordemos

- **TypeScript NO reemplaza JavaScript** TypeScript se compila a JavaScript.
- **TypeScript NO evita TODOS los bugs** Pero sí evita MUCHOS errores comunes.
- **TypeScript existe principalmente DURANTE el desarrollo**
  - El navegador NO entiende TypeScript.
  - Primero se transforma a JavaScript.

---

# ▶️ Cómo empezar con TypeScript

## Verificar que Node y npm están instalados

Antes de instalar TypeScript, necesitamos asegurarnos de que **Node.js** y **npm** están funcionando.

1. Abre una terminal: CMD, PowerShell o Terminal.  
2. Escribe los siguientes comandos para verificar las versiones:

```bash
node -v
npm -v
```
Si ves las versiones (v20.5.x y 9.8.x), ¡todo está listo! ✅

---

## Instalación de TypeScript `.ts`

Existen dos formas de instalar TypeScript, según cómo quieras usarlo.

- Instalar TypeScript globalmente
    - Esta opción es ideal si quieres poder usar TypeScript en cualquier carpeta de tu computadora.
    - Tienes varios proyectos y quieres un TS “global”.
     ```bash
     npm install -g typescript
     ```
     - Verifica que se instaló correctamente: `tsc -v`
- Instalar TypeScript en un proyecto específico
    - Esta opción es útil si solo quieres usar TypeScript dentro de un proyecto en particular.

    ```bash
     cd ruta/de/tu/proyecto
    ```
    - Instala TypeScript como dependencia de desarrollo:
    ```bash
     npm install --save-dev typescript
    ```
    - Verifica la instalación usando npx:
    ```bash
     npx tsc -v
    ```
---

# 📦 Recursos

🔹 **TypeScript Docs Documentación oficial**
Documentación oficial de TypeScript.  
Probablemente el mejor lugar para aprender cómo funciona realmente el lenguaje.

[Documentación oficial](https://www.typescriptlang.org/docs/)

---

### 🧠 Playground oficial

Puedes escribir y probar TypeScript directamente desde el navegador sin instalar nada.

Ideal para:
- practicar
- probar tipos
- experimentar
- compartir ejemplos

[TypeScript Playground](https://www.typescriptlang.org/play)

---

### 📘 Cheatsheets

🔹 **React + TypeScript Cheatsheets**

Guía muy útil para entender:
- props
- componentes
- hooks
- eventos
- patrones comunes

[ Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

### 🛠️ Herramientas útiles

🔹 **TSConfig Reference**
Explicación de todas las configuraciones posibles de TypeScript.
[TSConfig Reference](https://www.typescriptlang.org/tsconfig)

---

🔹 **Type Challenges**
[Retos de TypeScript para practicar lógica](https://type-challenges.github.io/)

---

# 💡 Observaciones

- Intenta escribir primero JavaScript y luego migrarlo a TypeScript.
- Los errores de TypeScript NO son enemigos:
  normalmente están intentando evitar un bug real.

