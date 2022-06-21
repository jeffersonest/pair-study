export default function PokeballComponent (_ballNumber: any ){
     return (`
          <span class="pokeball-container">
            <span class="pokeball-number">${_ballNumber}</span>
            <span class="pokeball-white"></span>
            <span class="pokeball-red"></span>
            <span class="pokeball-black"></span>
            <span class="pokeball-separator"></span>
            <span class="pokeball-white-small"></span>
            <span class="pokeball-white-small-bordered"></span>
          </span>
     `);

}
