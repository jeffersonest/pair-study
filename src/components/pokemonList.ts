import {Pokemon} from "../types/pokemon.type";
import PokeballComponent from "./pokeball";
import getPokemon from "../core/pokemon.service";
import Tooltip from "./tooltip";


export default async function listComponent (loader: Element){

    const params: any = new Proxy(new URLSearchParams(window.location.search),
        {
            get: (searchParams, prop) => searchParams.get('qtd'),
        });
    // Get the value of "some_key" in eg
    // "https://example.com/?some_key=some_value"
    let value = params.qtd;

    loader.classList.add('show');

    const pokemonList = await getPokemon(value === 0 ? 1 : value)

    loader.classList.remove('show');

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
                ${Tooltip(pokemon)}
            </li>
        `
    })

    return `       
        <ul class="grid pokemons-list">${pokemonsLi}</ul>
    `
}
