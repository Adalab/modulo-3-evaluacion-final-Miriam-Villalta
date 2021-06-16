import CharacterCard from "./CharacterCard";
import "../stylesheets/_characterList.scss";

function CharacterList({ characters }) {
  const characterElement = characters.map((characters) => {
    return <CharacterCard key={characters.id} characters={characters} />;
  });

  return (
    <section className="card-container">
      <ul className="card">{characterElement}</ul>
    </section>
  );
}

export default CharacterList;
