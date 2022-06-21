import { Pokemon } from "../types/pokemon.type";
import PokeballComponent from "./pokeball";

export default function listComponent (element: Element, pokemonList: Array <Pokemon> ){
    

    let pokemonsLi: string = ``;
    let title: Element = document.createElement('h1');

    title.textContent += "Listagem de pokemons";

    let pokemonUl = document.createElement('ul')

    title.classList.add('title');
    title.classList.add('text-center');
    title.classList.add('mb-4');
    title.classList.add('mt-4');
    pokemonUl.classList.add('grid');
    pokemonUl.classList.add('pokemons-list');

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
    pokemonUl.insertAdjacentHTML("afterbegin", pokemonsLi);
    
    element.insertAdjacentElement('beforeend', title);
    element.insertAdjacentElement("beforeend", pokemonUl);

    // let pokeId = document.className('pokemon-item-id')
   // pokeId.
    
    console.log(element);
}
