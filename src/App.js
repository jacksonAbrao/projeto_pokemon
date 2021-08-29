/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import PokemonThumnail from './components/PokemonThumnail';

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
    <div className="app-container">
      <h1>Pokemons</h1>
      <div className="pokemon-container">
        <div className="all-container" />
        {allPokemons
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((pokemon, index) => (
            <PokemonThumnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          ))}
        <button className="load-more" onClick={() => getAllPokemons()}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
