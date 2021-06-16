import "../stylesheets/_characterCard.scss";
import { Link } from "react-router-dom";

function CharacterCard({ characters }) {
  return (
    <li className="card__img">
      <Link to={`/characters/${characters.id}`}>
        <img
          className="card__img--photo"
          src={characters.image}
          alt={characters.name}
        />
        <h2 className="card__img--name">{characters.name}</h2>
        <p className="card__img--specie">{characters.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
