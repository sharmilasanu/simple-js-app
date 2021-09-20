

let pokemonRepository = (function(){  
    let pokemonList = []
        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
        let modalContainer = document.querySelector('#modal-container');
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
            loadDetails

            let listpokemon = document.createElement('li')    
            let button =  document.createElement("button")
            button.innerText = pokemon.name
            button.classList.add('button-class')
            listpokemon.appendChild(button)
            
       //    pokemonimg.appendChild(listpokemon)
           div.appendChild(listpokemon)
            
            button.addEventListener('click', function () {
                
                showModal();
                showDetails(pokemon);
                
            })
        }
        
        function showModal() {
          
          modalContainer.innerHTML = '';
          let modal = document.createElement('div');
          modal.classList.add('modal');
      
          let closeButtonElement = document.createElement('button');
          closeButtonElement.classList.add('modal-close');
          closeButtonElement.innerText = 'Close';
          closeButtonElement.addEventListener('click', hideModal);
      
          let pokemonHeight = document.createElement('h3');
          pokemonHeight.classList.add('pokemon-height');

          let pokemonimg = document.createElement('img');
          pokemonimg.classList.add('pokemon-img');

         
      
          modal.appendChild(closeButtonElement);
          modal.appendChild(pokemonHeight);
          modal.appendChild(pokemonimg);
         
          modalContainer.appendChild(modal);
      
      
          modalContainer.classList.add('is-visible');
        }
      
        function hideModal() {
          modalContainer.classList.remove('is-visible');
        }
      
        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();  
          }
        });
        function showDetails(pokemon){
        
            loadDetails(pokemon).then(function () {
             

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
              item_imageUrl = details.sprites.front_default;
              item_height = details.height;
              item_types = details.types;
              let pokemonHeight = document.querySelector('.pokemon-height');
              let pokemonimg = document.querySelector('.pokemon-img');
              pokemonHeight.innerHTML = 'Height : ' + item_height;
              pokemonimg.src = item_imageUrl
              for(i=0;i<item_types.length;i++){
                
                let modal = document.querySelector('.modal');
                let pokemontypes = document.createElement('li');
                let types_btn =  document.createElement("button");
                types_btn.innerText = item_types[i].type.name
                modal.appendChild(pokemontypes);
                types_btn.classList.add(item_types[i].type.name)
                pokemontypes.appendChild(types_btn)


              }

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


 