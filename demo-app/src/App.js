import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostsList from "./PostsList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PostsList} />
      </Switch>
    </Router>
  );
}

export default App;
