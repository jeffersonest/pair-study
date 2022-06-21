import {Pokemon} from "../types/pokemon.type";
import PokeballComponent from "./pokeball";


export default function listComponent (pokemonList: Array <Pokemon>){

    let pokemonsLi: string = ``;

    pokemonList.map(pokemon => {
        pokemonsLi += `
            <li class="pokemon-item row col-4 shadow mb-4">
                <div class="pokemon-item-header">
                    <span class="pokemon-item-id" id="pokemon-${pokemon.id}">
                    ${PokeballComponent(pokemon.id)}
                    </span>
                    <p class="pokemon-item-name">${pokemon.name}</p>                
                </div>
                <img src="${pokemon.image}" class="pokemon-item-image" />
            </li>
        `
    })

    return `
        <h1 class="title">Pokemons</h1>
        <ul class="grid pokemons-list">${pokemonsLi}</ul>
    `
}
