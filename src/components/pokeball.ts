export default function PokeballComponent (_ballNumber: any ){
     let ballContainer: Element = document.createElement('span');
     let ballWhite: Element = document.createElement('span');
     let ballRed: Element = document.createElement('span');
     let ballBlack: Element = document.createElement('span');
     let ballSeparator: Element = document.createElement('span');
     let ballWhiteSmall: Element = document.createElement('span');
     let ballWhiteSmallBordered: Element = document.createElement('span');
     let ballNumber: Element = document.createElement('span');

     ballContainer.classList.add('pokeball-container');

     ballWhite.classList.add('pokeball-white');
     ballRed.classList.add('pokeball-red');
     ballBlack.classList.add('pokeball-black');
     ballSeparator.classList.add('pokeball-separator');
     ballWhiteSmall.classList.add('pokeball-white-small');
     ballWhiteSmallBordered.classList.add('pokeball-white-small-bordered');
     ballNumber.classList.add('pokeball-number');

     ballNumber.innerHTML = _ballNumber.toString(); 

     ballContainer.insertAdjacentElement('beforeend', ballWhite)
     ballContainer.insertAdjacentElement('beforeend', ballRed)
     ballContainer.insertAdjacentElement('beforeend', ballBlack)
     ballContainer.insertAdjacentElement('beforeend', ballSeparator)
     ballContainer.insertAdjacentElement('beforeend', ballWhiteSmall)
     ballContainer.insertAdjacentElement('beforeend', ballWhiteSmallBordered)
     ballContainer.insertAdjacentElement('beforeend', ballNumber)
     console.log('dsadsa',ballContainer)
}
