import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Boom from "./page/Boom";
import Landing from "./page/Landing";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/bom">
            <Boom />
          </Route>
          <Route path="/dashboard">Dash</Route>
          <Route path="*">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
