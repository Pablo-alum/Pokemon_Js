function pokemonInitials() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
    .then((response) => {
      return response.json(); // Parsear la respuesta como JSON
    })
    .then((data) => renderPokemonCaruzel(data.results))
    .catch((error) => {
      console.error("Error:", error);
    });
}
function renderPokemonCaruzel(fetchKantoPokemons) {
  let pokemon_interHTML = ""; // Inicializar como una cadena vacía
  let a = 1; // Inicializar el valor de "a"
  let contadorTarjetas = 0;
  let b = "";
  fetchKantoPokemons.forEach((pokemon) => {
    let color_tipo = a <= 3 ? "bg-verde" : a <= 6 ? "bg-rojo" : "bg-azul";
    let btn_color =
      a <= 3
        ? "btn-outline-success"
        : a <= 6
        ? "btn-outline-danger"
        : "btn-outline-primary";
    let active = a === 3 ? "active" : "";

    let codigoHTML = `
          <div class="card mx-2 ${color_tipo}" style="width: 18rem;">
            <img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a}.png" alt="card image cap">
            <div class="card-body">
              <h5 class="card-title">${pokemon.name}</h5>
              <p class="card-text">some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="d-flex justify-content-center">
                <a href="#" class="btn ${btn_color} ">!Lo quiro!</a>
              </div>
            </div>
          </div>
  `;
    b += codigoHTML;
    a++;
    contadorTarjetas++;

    if (contadorTarjetas % 3 === 0) {
      pokemon_interHTML += ` <div class="carousel-item ${active} z-2"><div class="d-flex justify-content-center"> ${b} </div> </div> `;
      b = "";
    }
  });
  document.querySelector(".carousel-inner").innerHTML = pokemon_interHTML;
}
//Cambia el color del nav
let nav_cont = 1;

/*function cambio_color() {*/

/*const colors = Array.from(document.getElementsByClassName("color"));*/

/*colors.forEach((color) => {*/
/*switch (nav_cont) {*/
/*case 1:*/
/*color.classList.remove("bg-verde");*/
/*color.classList.add("bg-rojo");*/
/*break;*/
/*case 2:*/
/*color.classList.remove("bg-rojo");*/
/*color.classList.add("bg-azul");*/
/*break;*/
/*default:*/
/*color.classList.remove("bg-azul");*/
/*color.classList.add("bg-verde");*/
/*nav_cont = 0;*/
/*}*/
/*});*/
/*nav_cont++;*/

/*console.log(nav_cont);*/
/*}*/

//iner de todos los tipos en javascript
function inerTipePokemons() {
  const inerTipos = document.querySelector(".tipos");
  const tipos_y_nombres = {
    normal: { name: "Normal", color: "#A8A878" },
    fuego: { name: "Fuego", color: "#F08030" },
    agua: { name: "Agua", color: "#6890F0" },
    planta: { name: "Planta", color: "#78C850" },
    electrico: { name: "Eléctrico", color: "#F8D030" },
    hielo: { name: "Hielo", color: "#98D8D8" },
    lucha: { name: "Lucha", color: "#C03028" },
    veneno: { name: "Veneno", color: "#A040A0" },
    tierra: { name: "Tierra", color: "#E0C068" },
    volador: { name: "Volador", color: "#A890F0" },
    psiquico: { name: "Psíquico", color: "#F85888" },
    bicho: { name: "Bicho", color: "#A8B820" },
    roca: { name: "Roca", color: "#B8A038" },
    fantasma: { name: "Fantasma", color: "#705898" },
    dragon: { name: "Dragón", color: "#7038F8" },
  };

  let tipos_html = "";
  Object.values(tipos_y_nombres).forEach((tipo) => {



    html = `
    <div class="form-check form-check-inline rounded" style="background-color:${tipo.color}">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="${tipo.name}Check"
                  value="${tipo.name}"
                />
                <label class="form-check-label" for="${tipo.name}check">${tipo.name}</label>
              </div>`;
    tipos_html += html;
  });
  inerTipos.innerHTML = tipos_html;
}

//card  de toos los pokemons de la primera generacion
fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => {
    return response.json(); // Parsear la respuesta como JSON
  })
  .then((data) => card_pokemon_primera_gen(data.results))
  .catch((error) => {
    console.error("Error:", error);
  });

function card_pokemon_primera_gen(pokemons) {
  const iner_pokemon = document.querySelector(".iner_pokemon");
  coleccion_de_cartas = "";
  let cont = 1;
  pokemons.forEach((pokemon) => {
    let html = `
       <div class="col-lg-3 col-sm-4 my-3 d-flex justify-content-center">
              <div
                class="shadow-drop-2-center scale-up-center rounded card poke-card border-0 text-decoration-none d-flex w-75"
                type="button"
              >
                <img
                  class="card-img-top "
                  alt="Card image cap"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cont}.png"
                  style="width: 12rem"
                />
                <div class="card-body textoNegro">
                  <h5>${pokemon.name}</h5>
                  <a href="#" class="btn btn-danger">!lo quiero!</a>
                </div>
              </div>
            </div>

    `;
    coleccion_de_cartas += html;
    cont++;
  });
  console.log(coleccion_de_cartas);
  iner_pokemon.innerHTML = coleccion_de_cartas
}

inerTipePokemons();
pokemonInitials();
