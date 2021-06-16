import { Link } from "react-router-dom";
import "../stylesheets/_characterDetail.scss";
const CharacterDetail = ({ name, status, species, origin, episode }) => {
  return (
    <div className="info-container">
      <section className="info">
        <div className="info-back">
          <Link to="/">Volver</Link>
        </div>
        <img src="" alt="" className="info-img" />
        <article className="info-text">
          <ul className="info-text__list">
            <li className="info-text__list--elem">
              <h2>{name}</h2>
            </li>
            <li className="info-text__list--elem">Status: {status}</li>
            <li className="info-text__list--elem">Specie: {species}</li>
            <li className="info-text__list--elem">Origin: {origin}</li>
            <li className="info-text__list--elem">Episode: {episode}</li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default CharacterDetail;
