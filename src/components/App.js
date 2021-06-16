import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import api from "../services/api.js";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecie, setFilterSpecie] = useState("");

  useEffect(() => {
    api().then((data) => {
      setCharacters(data);
      console.log(data);
    });
  }, []);

  const handleFilters = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else {
      setFilterSpecie(data.value);
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
      <Filters handleFilters={handleFilters}></Filters>
      <CharacterList characters={(characters, filteredCharacter)} />
      <Switch>
        <Route path="/characters/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
