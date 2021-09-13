
/*for(let i=0;i<= pokemonList.length;i++){
document.getElementById('pok_name'+ i).innerHTML = pokemonList[i].name
if(pokemonList[i].height > 3)
{
document.getElementById('pok_height'+ i).innerHTML = pokemonList[i].height+ ' ' + '(Wow!Thats big)'
}
else{
    document.getElementById('pok_height'+ i).innerHTML = pokemonList[i].height
}
}*/

let pokemonRepository = (function(){  
    let pokemonList = [
        {name : 'Bulbasur',height : 7,types : ['grass','poison'] },
        {name : 'Charmander',height : 3,types : ['Bug','poison'] },
        {name : 'Ivysur',height : 0.3,types : ['Flying','Normal'] },
        {name : 'Kakuna',height : 1,types : ['ground','poison'] },
        {name : 'Blastoise',height : 1,types : ['grass','bug'] },
        {name : 'Meganium',height : 1,types : ['psychic','water']},
        {name : 'Ninetales',height : 1,types : ['ground','poison'] },
        {name : 'Taillow',height : 1,types : ['grass','bug'] },
        {name : 'Weedle',height : 1,types : ['psychic','water']},
        {name : 'Squirtle',height : 1,types : ['ground','poison'] },
        {name : 'Beautifly',height : 1,types : ['ground','poison'] },
        {name : 'Torterra',height : 1,types : ['ground','poison'] },
        {name : 'Vespiquen',height : 4,types : ['grass','bug'] },
        {name : 'Floatzel',height : 5,types : ['psychic','water']},
        {name : 'Mismagius',height : 6,types : ['ground','poison'] },
        {name : 'Magmortar',height : 5,types : ['ground','poison'] },
        {name : 'Masmoswine',height : 1.2,types : ['flying','bug'] }
        ]
    function getAll() {
            return pokemonList;
          }
    function add(pokemon) 
        {
        pokemonList.push(pokemon);
        }
   return {
       getAll : getAll,
       add : add
   }
})();
let pokemonList = pokemonRepository.getAll()
pokemonList.forEach(function(pokemon,index) {
    document.getElementById('pok_name'+ index).innerHTML = pokemon.name
    document.getElementById('pok_height'+ index).innerHTML = pokemon.height
  });