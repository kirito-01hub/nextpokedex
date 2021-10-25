import react from "react";

export async function getStaticProps() {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
  
        throw new Error('Deu problema');
      })
      .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries);
  
    return {
      props: {
        pokemons,
      },
    };
  }
  
  export default function Home(props) {
    const { pokemons } = props;
  
    return (
      <div>
        Pokédex - Gabriel Lima
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.entry_number}>
               {pokemon.pokemon_species.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }