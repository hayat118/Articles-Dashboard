import { Route, Switch } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
import Books from "./Books";
import Help from "./Help";
import Home from "./Home";
import NotFound from "./NotFound";
import People from "./People";

function Main() {
  return (
    <div className="page-content">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/articles/:slug">
          <Article />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
