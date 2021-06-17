import CharacterCard from "./CharacterCard";
import "../stylesheets/_characterList.scss";

function CharacterList({ characters }) {
  let characterElement = "";
  if (characters.length === 0) {
    return (
      <h2 className="not-found">
        No hay ningún personaje que coincida con la búsqueda
      </h2>
    );
  } else {
    characterElement = characters.map((characters) => {
      return <CharacterCard key={characters.id} characters={characters} />;
    });
  }
  return (
    <section className="card-container">
      <ul className="card">{characterElement}</ul>
    </section>
  );
}

export default CharacterList;
