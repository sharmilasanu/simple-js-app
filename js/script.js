

let pokemonRepository = (function(){  
    let pokemonList = []
        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
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
           // $( 'li' ).addClass("list-group-item")    /* Bootstrap utility classes */
            let button =  document.createElement("button")
            button.innerText = pokemon.name
            $("button").addClass("btn btn-primary");  /* Bootstrap utility classes */
            listpokemon.appendChild(button)
            
       //    pokemonimg.appendChild(listpokemon)
           div.appendChild(listpokemon)
           button.setAttribute('data-target','#pokemonModal');
           button.setAttribute('data-toggle','modal');
            button.addEventListener('click', function () {
                
                
                showDetails(pokemon);
                
            })
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
              let pokemonHeight = document.querySelector('#pokemon-height');
              let pokemonimg = document.querySelector('#pokemon-img');
              pokemonHeight.innerHTML = 'Height : ' + item_height;
              let pokemonName = document.querySelector('#pokemonModalTitle');
              pokemonName.innerHTML = details.name
              pokemonimg.src = item_imageUrl
              
              for(i=0;i<item_types.length;i++){
                
                let modal = document.querySelector('.modal-body');
                
                let types_btn =  document.createElement("button");
                types_btn.innerText = item_types[i].type.name
                types_btn.classList.add('pok_typ_btn')
                types_btn.classList.add(item_types[i].type.name)
                
                modal.appendChild(types_btn)


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

  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    var mybutton = document.getElementById("gotoTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }