# Pokedex

Pequeña demostración del uso de **JavaScript** para trabajar con datos almacenados en un archivo **JSON/JavaScript** que contiene información sobre diferentes Pokémon.

## Descripción

El objetivo de este proyecto es mostrar cómo se pueden importar y manipular datos de una Pokédex utilizando JavaScript.

A partir de un listado de Pokémon, se realizan operaciones sobre los datos mediante métodos de arrays como `map()`, permitiendo transformar la información y posteriormente mostrarla en una página web mediante el DOM.

## Tecnologías utilizadas

- **HTML5** — Estructura de la página.
- **CSS3** — Estilos de la interfaz.
- **JavaScript** — Manipulación de los datos y del DOM.
- **JSON** — Almacenamiento estructurado de los datos de los Pokémon.

## Estructura del proyecto

```text
Pokedex/
│
├── index.html
├── main.js
├── pokedex.js
└── README.md
```

### `pokedex.js`

Contiene el listado de Pokémon y sus datos.

Ejemplo:

```javascript
export const pokemons = [
    {
        name: "Bulbasaur",
        type: "grass"
    },
    {
        name: "Charmander",
        type: "fire"
    }
];
```

### `main.js`

Se encarga de importar los datos y trabajar con ellos mediante JavaScript.

Por ejemplo, podemos utilizar `map()` para obtener una nueva lista a partir de los nombres:

```javascript
import { pokemons } from "./pokedex.js";

document.addEventListener("DOMContentLoaded", () => {
    const mapPokemon = pokemons.map((pokemon) => pokemon.name);

    const div = document.querySelector("#id");
    div.innerHTML = mapPokemon;
});
```

En este caso:

- `import` permite utilizar los datos de `pokedex.js`.
- `map()` recorre todos los Pokémon.
- `pokemon.name` obtiene el nombre de cada Pokémon.
- `querySelector()` busca el elemento HTML donde se mostrarán los datos.
- `innerHTML` introduce el resultado en la página.

## Objetivos de la práctica

Con esta demostración se pretende practicar:

- Importación y exportación de datos con JavaScript.
- Trabajo con estructuras de datos.
- Uso de arrays de objetos.
- Uso del método `map()`.
- Acceso a propiedades de objetos.
- Manipulación del DOM.
- Representación de datos en una página web.

## Funcionamiento

Al cargar la página, JavaScript espera a que el documento HTML haya terminado de cargarse.

Después:

1. Se importan los datos de la Pokédex.
2. Se recorren los Pokémon mediante `map()`.
3. Se obtiene la información que queremos mostrar.
4. Se selecciona un elemento del HTML.
5. Se muestran los resultados en la página.

## Ejemplo de resultado

Si la Pokédex contiene:

```text
Bulbasaur
Charmander
Squirtle
```

El JavaScript puede generar una lista con esos nombres y mostrarla directamente en la página.

## Autor

Proyecto realizado como práctica de **Desarrollo Web en Entorno Cliente (DWEC)**.
