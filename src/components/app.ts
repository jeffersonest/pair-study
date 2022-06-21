import listComponent from "./pokemonList";
import getPokemon from "../core/pokemon.service";
import headerComponent from "./header";
import LoaderComponent from "./loaderComponent";

(async ()=>{
        const app = document.getElementById('app');

        app.insertAdjacentElement('afterbegin', LoaderComponent())
        const loader = document.getElementById('loader');

        app.insertAdjacentHTML('beforeend', `
           ${headerComponent()} 
           ${await listComponent(loader, app)}
        `)
})()