import {pokemons} from "./pokedex.js";

document.addEventListener("DOMContentLoaded", () => { 

const mapPokemon = pokemons.map((pokemon) => pokemon.id + "<br>" + "Name: " +pokemon.name.english + "<br>" + "Type:" +  pokemon.type.join(", ") +"<br> <br>").join("")
const div = document.querySelector("#content")
div.innerHTML = mapPokemon;



})