import listComponent from "./pokemonList";
import getPokemon from "../core/pokemon.service";
import headerComponent from "./header";

(async ()=>{
    const params: any = new Proxy(new URLSearchParams(window.location.search),
        {
            get: (searchParams, prop) => searchParams.get('qtd'),
        });
    // Get the value of "some_key" in eg
    // "https://example.com/?some_key=some_value"
    let value = params.qtd;

    if(value <= 0 && value >= 898){
        window.alert('insira uma quantidade valida')
    }else {
        const pokemonList = await getPokemon(value === 0 ? 1 : value)
        const app = document.getElementById('app');
        app.insertAdjacentHTML('beforeend', `
           ${headerComponent()}
           ${listComponent(pokemonList)}
        `)
    }
})()