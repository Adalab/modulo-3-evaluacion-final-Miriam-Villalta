import "../stylesheets/App.scss";
//import { Link, Route, Switch } from "react-router-dom";
import Header from "./Header";
import CharacterList from "./CharacterList";
import { useEffect, useState } from "react";
import api from "../services/api.js";

const App = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    api().then((data) => {
      setCharacters(data);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <CharacterList />
      {/*<Switch>
        <Route exact path="/" component={} />
        <Route path="/about" component={} />
      </Switch>*/}
    </div>
  );
};

export default App;
