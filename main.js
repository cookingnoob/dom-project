const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';
// const searchUrl = `${POKEMON_URL}pokemon/pikachu`;
const articleSection = document.querySelector('#cardsSection');
1,2,3,4,5,6,7,8,9,10


const pokemonTemplate = () => {
  return `
  <div class="cardContainer">
  <img
    src="${pokemonData.image}"
    alt="">
  <div class="announcements">
    <p class="name">${pokemonData.name}</p>
    <p class="price">${pokemonData.id}</p>
    <p class="seller">${pokemonData.type[0].type.name}</p>
    <img src="" alt="type color">
  </div>
  <input type="checkbox" name="" id=""> comprar
</div>
`;
}

const renderPokemon = () => {
  const template = pokemonTemplate();
  articleSection.innerHTML += template;
};



for (i = 1; i < 11; i++){
  let searchUrl = `${POKEMON_URL}${i}`
  fetch(searchUrl)
  .then((res) => res.json())
  .then((response) => {
    console.log(response)
    pokemonData = {
      id: response.id,
      name: response.name,
      type: response.types,
      image: response.sprites.front_default,
    }
    renderPokemon()
  })
}






//un loop que cree el objeto de cada pokemon (del 1 al 151) | nombre | id | tipo | fuerte contra | debil contra | imagen
// el objeto pokemon es empujado a un array
// se renderean los elementos (0-9), (10-19), (20-29), (30-39), (40-49), (50-59), (60-69), (70-79), (80-89), (90-99), (100-109), (110-119), (120-129), (130-139), (140-149), (150-151)
    //tener en el DOM la lista del 1-16 con un eventListener que renderee ese bloque de pokemones
    // one.addEventListener('click', searchPokemon(0, 9))
      //limpia el DOM
      //pasa los valores que se usaran en el loop, el de inicio y el de fin
      //crea 10 objetos que invocaran a la funcion de render





//leccion async
      // const main = async () => {
      //   console.log('pedimos un pokemon');
      //   let pokemon = null;
      //   try {
      //     const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      //     const response = await res.json();
      //     pokemon = response
      //     console.log('respuesta: ', response);
      //   } catch (error) {
      //     console.log('error:', error)
      //   }
      
      
      //   console.log(`ya tengo el pokemon`, pokemon)
      // }
      
      // main().then(() => {
      //   console.log('la función ha terminado')
      // })