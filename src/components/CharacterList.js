import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const characterElement = characters.map((characters) => {
    return <CharacterCard key={characters.id} characters={characters} />;
  });

  return <ul className="card">{characterElement}</ul>;
}

export default CharacterList;
