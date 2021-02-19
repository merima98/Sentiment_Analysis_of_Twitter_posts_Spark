import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

import Home from "./features/home/Home";
import Quotes from "./features/quotes/Quotes";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quotes" component={Quotes} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
