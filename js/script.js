
let pokemonRepository = (function(){  
    let pokemonList = [
        {name : 'bulbasur',height : 7,types : ['grass','poison'] },
        {name : 'charmander',height : 3,types : ['Bug','poison'] },
        {name : 'ivysaur',height : 0.3,types : ['Flying','Normal'] },
        {name : 'kakuna',height : 1,types : ['ground','poison'] },
        {name : 'blastoise',height : 1,types : ['grass','bug'] },
        {name : 'meganium',height : 1,types : ['psychic','water']},
        {name : 'ninetales',height : 1,types : ['ground','poison'] },
        {name : 'taillow',height : 1,types : ['grass','bug'] },
        {name : 'weedle',height : 1,types : ['psychic','water']},
        {name : 'squirtle',height : 1,types : ['ground','poison'] },
        {name : 'beautifly',height : 1,types : ['ground','poison'] },
        {name : 'torterra',height : 1,types : ['ground','poison'] },
        {name : 'vespiquen',height : 4,types : ['grass','bug'] },
        {name : 'floatzel',height : 5,types : ['psychic','water']},
        {name : 'mismagius',height : 6,types : ['ground','poison'] },
        {name : 'magmortar',height : 5,types : ['ground','poison'] },
        {name : 'mamoswine',height : 1.2,types : ['flying','bug'] }
        ]
    function getAll() {
            return pokemonList;
          }
    function add(pokemon) 
        {
        pokemonList.push(pokemon);
        }
        function addListItem (pokemon){
           
                           
            let grid_layout = document.querySelector('.grid_layout')   /* finding the parent element under which new div will be created*/
            let div = document.createElement('div');                  /*creates div element*/
            div.classList.add('grid_item');                          /*adds class div element*/
            grid_layout.appendChild(div)
           
            let pokemonimg =  document.createElement("img")
            pokemonimg.src ="img/"+pokemon.name+".png"
            div.appendChild(pokemonimg)

            let listpokemon = document.createElement('li')    
            let button =  document.createElement("button")
            button.innerText = pokemon.name
            button.classList.add('button-class')
            listpokemon.appendChild(button)
          
           pokemonimg.appendChild(listpokemon)
           div.appendChild(listpokemon)
            
            button.addEventListener('click', function () {
                
                showDetails(pokemon)
            })
        }
        function showDetails(pokemon){
        
            console.log(pokemon.name)
        }
        
   return {
       getAll : getAll,
       add : add,
       addListItem : addListItem,
       showDetails : showDetails
   }
})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon)
});
