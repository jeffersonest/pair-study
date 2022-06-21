import { Pokemon } from "../types/pokemon.type";

export default function Tooltip(pokemon: Pokemon, ){
    let itemString : string = '';
    pokemon.types?.map((item)=>{
        itemString += item.type.name
    })

    return `
        <div class="info-tooltip-container shadow">
            <div class="info-tooltip-container-top">
             <h2>
             ${itemString}</h2>
            </div>
            <div class="info-tooltip-container-middle">
                <p>${pokemon.id}</p>
                <h2>${pokemon.name}</h2>
            </div>
          
            <div class="info-tooltip-container-bottom">
                <span>Largura ${pokemon.weight}</span>
                <span>Altura ${pokemon.height}</span>
            </div>
        
        </div>
    `
}