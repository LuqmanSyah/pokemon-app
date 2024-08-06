function getPokemon() {
  const inputPokemon = document.getElementById("input-pokemon");
  const pokemon = inputPokemon.value.toLowerCase().trim();

  const pokemonImg = document.getElementById("pokemon-img");
  const pokemonName = document.getElementById("pokemon-name");
  const pokemonResult = document.querySelector('.result-pokemon');

  if (pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        if (!response.ok) {
          // Check for successful response
          throw new Error("Pokemon not found");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        pokemonResult.style.display = 'flex';
        pokemonImg.src = data.sprites.other.dream_world.front_default;
        pokemonName.textContent = data.name;

        inputPokemon.value = "";
      })
      .catch((err) => {
        console.error(err);
        pokemonName.textContent = "Pokemon tidak ditemukan. Coba cari lagi.";

        inputPokemon.value = "";
        pokemonImg.src = "";
      });
  }
}

getPokemon();
