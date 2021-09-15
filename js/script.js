
let pokemonRepository = (function(){  
    let pokemonList = []
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
