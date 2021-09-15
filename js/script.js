
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
/* */

let pokemonRepository = (function(){  
    let pokemonList = [
       /* {name : 'bulbasur',height : 7,types : ['grass','poison'] },
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
        {name : 'mamoswine',height : 1.2,types : ['flying','bug'] }*/
        ]
        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    function getAll() {
            return pokemonList;
            console.log(pokemonList)
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
           // pokemonimg.src = imageUrl;
            //div.appendChild(pokemonimg)


            let listpokemon = document.createElement('li')    
            let button =  document.createElement("button")
            button.innerText = pokemon.name
            button.classList.add('button-class')
            listpokemon.appendChild(button)
          
       //    pokemonimg.appendChild(listpokemon)
           div.appendChild(listpokemon)
            
            button.addEventListener('click', function () {
                
                showDetails(pokemon);

            })
        }
        
        function showDetails(pokemon){
        
            loadDetails(pokemon).then(function () {
                console.log(pokemon);
              });
        }
        function loadList(){
             return  fetch(apiUrl).then(function(response){
          return  response.json();
            }).then(function(json){
              json.results.forEach(function (item){
              let pokemon = {
                  name : item.name,
                  detailsUrl : item.url
              };
              add(pokemon);
              });
              }).catch(function (error){
               console.error(error);
              })
        }
        function loadDetails(item) {
            let url = item.detailsUrl;
            return  fetch(url).then(function (response) {
                return  response.json();
            }).then(function (details) {
             // Now we add  the details to the item
              item.imageUrl = details.sprites.front_default;
              item.height = details.height;
              item.types = details.types;
            }).catch(function (error) {
              console.error(error);
            });
          }
        
   return {
       getAll : getAll,
       add : add,
       addListItem : addListItem,
       showDetails : showDetails,
       loadList : loadList,
       loadDetails :  loadDetails
   }
})();
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });


 