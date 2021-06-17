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
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState("");
  const [filterSpecie, setFilterSpecie] = useState("");

  useEffect(() => {
    if (characters.length === 0) {
      api().then((data) => {
        setCharacters(data);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  const handleFilters = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "species") {
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
      return characters.id === parseInt(characterId);
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

        <Route path="/characters/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
