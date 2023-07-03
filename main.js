const products = [{
  name: 'HP Essentials 255 G8 AMD',
  price: 289,
  stars: 4,
  reviews: 250,
  seller: 'PcComponentes',
  image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
},
  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño... 
];

const renderProducts = () => {

}

products.forEach(product => console.log(product))



//un loop que cree el objeto de cada pokemon (del 1 al 151) | nombre | id | tipo | fuerte contra | debil contra | imagen
// el objeto pokemon es empujado a un array
// se renderean los elementos (0-9), (10-19), (20-29), (30-39), (40-49), (50-59), (60-69), (70-79), (80-89), (90-99), (100-109), (110-119), (120-129), (130-139), (140-149), (150-151)
    //tener en el DOM la lista del 1-16 con un eventListener que renderee ese bloque de pokemones
    // one.addEventListener('click', searchPokemon(0, 9))
      //limpia el DOM
      //pasa los valores que se usaran en el loop, el de inicio y el de fin
      //crea 10 objetos que invocaran a la funcion de render