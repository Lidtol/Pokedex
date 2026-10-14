import {pokemons} from "./pokedex.js";

// Aquí importas el array de arrays que es el pokedex.js.

document.addEventListener("DOMContentLoaded", () => { 
// esto es el DOM, básicamente es lo que permite que primero cargue la página antes de hacer cualquier cosa, todo o parte del código se encontrará dentro para que, bueno, se ejecute apropiadamente '-'.


const mapPokemon = pokemons.map((pokemon) => pokemon.id + "<br>" + "Name: " +pokemon.name.english + "<br>" + "Type:" +  pokemon.type.join(", ") +"<br> <br>").join("")


const divContent = document.querySelector("#content")
divContent.innerHTML = mapPokemon;

/*
Crear un botón para cada tipo de pokemon
Cuando se hace click se muestran solo los de ese tipo.
*/

const botones = document.querySelector("#tipos");
const arrayTipos = pokemons.map((pokemon) => pokemon.type)
const arrayTiposIntentoDosElectricBoogalo = arrayTipos.flat();

const arrayTiposAhoraSi = [...new Set(arrayTiposIntentoDosElectricBoogalo)]

console.log(arrayTiposAhoraSi);

const divTipos = document.querySelector("#tipos");P


for (let i = 0; i < arrayTiposAhoraSi.length; i++) {
    let button = document.createElement('button');
    button.innerHTML = arrayTiposAhoraSi[i];
    divTipos.appendChild(button);
    
}

function filtrarPokemonsPorTipo(tipo) {
        const tipoPokemon = mapPokemon.filter()

}


})