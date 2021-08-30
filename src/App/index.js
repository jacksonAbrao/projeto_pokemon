/* eslint-disable import/no-named-as-default-member */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import PokemonThumnail from '../components/PokemonThumnail';

function App() {
  // esta cont, pega os pokemons
  const [allPokemons, setAllPokemons] = useState([]);
  // esta const, carrega mais pokemons, vinculado ao load more
  const [loadMorePokemons, setLoadMorePokemons] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=100',
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMorePokemons);
    const data = await res.json();

    setLoadMorePokemons(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        );
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <div className="font-sans grid justify-items-center">
      <h1>Pokedex</h1>
      <div className="flex capitalize content-around  flex-wrap justify-center">
        {allPokemons
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((pokemon, index) => (
            <PokemonThumnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              ability={pokemon.abilities[0].ability.name}
              hp={pokemon.stats[0].base_stat}
              attack={pokemon.stats[1].base_stat}
              defense={pokemon.stats[2].base_stat}
              speed={pokemon.stats[5].base_stat}
              height={pokemon.height}
              weight={pokemon.weight}
              key={index}
            />
          ))}

        <div className="">
          <button
            className="searchButton thumb-container flex justify-center justify-self-auto"
            onClick={() => getAllPokemons()}
          >
            <h3>Click to</h3>
            <img src="https://image.flaticon.com/icons/png/512/188/188980.png" />
            <h3>discover new</h3>
            <h3>Pokemons</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
