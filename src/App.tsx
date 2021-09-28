import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Boom from "./page/Boom";
import Landing from "./page/Landing";
import TestPage from "./page/TestPage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Switch>
            <Route path="/bom">
              <Boom />
            </Route>
            <Route path="/dashboard">
              <TestPage></TestPage>
            </Route>
            <Route path="*">
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
