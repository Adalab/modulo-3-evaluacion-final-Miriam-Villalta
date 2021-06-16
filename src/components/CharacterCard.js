import "../stylesheets/_characterCard.scss";
function CharacterCard({ characters }) {
  return (
    <>
      <li className="card__img">
        <img src={characters.image} alt={characters.name} />
      </li>
      <li className="card__name">
        <h2>{characters.name}</h2>
      </li>
      <li className="card__specie">
        <p>{characters.species}</p>
      </li>
    </>
  );
}

export default CharacterCard;
