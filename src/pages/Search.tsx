import { useState } from "react";
import axios from "axios";
import { Pokemon } from "../interfaces/Pokemon";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Search = () => {
  const [pokemonForm, setpokemonForm] = useState("");
  const [isSearch, setIsSearch] = useState(true);
  const [pokemon, setPokemon] = useState("");
  const [img, setImg] = useState("");

  const fetchPokemonList = async (name: string) => {
    if (pokemonForm != "") {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
          setIsSearch(true);
          setPokemon(response.data);
          setImg(response.data.sprites.front_default);
          console.log(pokemon);
        })
        .catch((error) => {
          console.log(error);
          setIsSearch(false);
          setPokemon("")
        });
    } else {
      console.log("Escribe algo");
      setIsSearch(false);
      setPokemon("")
    }
  };

  return (
    <>
    <Header/>
    <h2>Buscar</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fetchPokemonList(pokemonForm.toLocaleLowerCase());
        }}
      >
    
        <input
          type="text"
          placeholder="Pikachu..."
          value={pokemonForm}
          onChange={(event) => setpokemonForm(event.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>
      {!isSearch ? (
        <p id="notPokemonTxt" className="text-red">No se ha encontrado el pokemon</p>
      ) : (
       ""
      )}

{
  pokemon != "" ? <img id="img" src={img}></img> : ""
}
<Footer/>
    </>
  );
};

export default Search;
