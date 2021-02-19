import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./features/home/Home";
import Quotes from "./features/quotes/Quotes";
import GlobalStyle from "./globalStyles.js";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quotes" component={Quotes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
