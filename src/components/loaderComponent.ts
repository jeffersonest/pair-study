import PokeballComponent from "./pokeball";

export default function LoaderComponent() {
    let loader = document.createElement('div');
    loader.classList.add('loader');
    loader.classList.add('container');
    loader.setAttribute('id', 'loader')
    loader.insertAdjacentHTML(  'beforeend',  `
        <div class="loader container">
            <div class="loader">
                ${PokeballComponent('')}
            </div>
        </div>
    `);

    loader.addEventListener('data-change',(e)=> {
        console.log('changed')
    });

    return loader
}