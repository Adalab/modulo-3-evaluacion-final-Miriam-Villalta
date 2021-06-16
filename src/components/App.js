import "../stylesheets/App.scss";
//import { Link, Route, Switch } from "react-router-dom";
import Header from "./Header";
import CharacterList from "./CharacterList";
//import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import api from "../services/api.js";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    api().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilters = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <Header />
      <Filters handleFilters={handleFilters}></Filters>
      <CharacterList characters={characters} />
      {/*<Switch>
        <Route path="/CharacterDetail" component={CharacterDetail} />
      </Switch>*/}
    </div>
  );
};

export default App;
