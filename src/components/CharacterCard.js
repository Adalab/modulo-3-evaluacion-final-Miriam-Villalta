import "../stylesheets/_characterCard.scss";
import api from "../services/api"
function CharacterCard({name, id, species, image}) {
    api()
  return (
    <ul className="card">
      <li className="card__img">
        <img src="" alt="" />
      </li>
      <li className="card__name">
        <h2>Nombre</h2>
      </li>
      <li className="card__specie">
        <p>Especie</p>
      </li>
    </ul>
  );
}

export default CharacterCard;
