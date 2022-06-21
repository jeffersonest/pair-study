import listComponent from "../components/pokemonList";
import { Pokemon } from "../types/pokemon.type";

 async function getPokemon(count: number):Promise<Array<Pokemon>> {
    let pokemons: Array<Pokemon> = []
    if (count > 0 ) {
        for (let i:number = 1; i <= count; i++) {
            const API_URL: string = `https://pokeapi.co/api/v2/pokemon/${i}`;
            const response: any = await fetch(API_URL);
                const pokeData: any = await response.json();
                const { name, id } = pokeData
                pokemons.push( { 
                    name, 
                    id ,
                    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`
                })
        }
        return pokemons;
    } else {
        return [];
    }
 }
 (async () => {
    const params: any = new Proxy(new URLSearchParams(window.location.search),
    { 
       get: (searchParams, prop) => searchParams.get('qtd'),
    });
    // Get the value of "some_key" in eg
    // "https://example.com/?some_key=some_value" 
    let value = params.qtd;  
   
   const pokemonList = await getPokemon(value === 0 ? 1 : value)

   let app: any = document.getElementById("app");
   
   if(value <= 0 && value >= 898){
       window.alert('insira uma quantidade valida') 
    }else {
       listComponent(app, pokemonList)
   }
 })()

