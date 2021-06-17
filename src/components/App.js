import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import api from "../services/api.js";
import ls from "../services/localstorage";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecie, setFilterSpecie] = useState("");
  const [characterDetail, setcharacterDetail] = useState("");

  useEffect(() => {
    if (characters.length === 0) {
      api().then((data) => {
        setCharacters(data);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("character detail", characterDetail);
  }, [characters]);

  const handleFilters = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "species") {
      setFilterSpecie(data.value);
    } else {
      return <h2>No hay ningún personaje que coincida con la búsqueda</h2>;
    }
  };

  const filteredCharacter = characters
    .filter((characters) => {
      return characters.name
        .toLowerCase()
        .toUpperCase()
        .includes(filterName.toLowerCase().toUpperCase());
    })
    .filter((characters) => {
      return characters.species
        .toLowerCase()
        .toUpperCase()
        .includes(filterSpecie.toLowerCase().toUpperCase());
    });

  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.id;
    const findCharacter = characters.find((characters) => {
      return characters.id === characterId;
    });
    if (findCharacter !== undefined) {
      return <CharacterDetail characters={findCharacter} />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters handleFilters={handleFilters}></Filters>
          <CharacterList characters={(characters, filteredCharacter)} />
        </Route>

        <Route path="/characters/:id" render={renderCharacterDetail}>
          <CharacterDetail characters={characters} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
