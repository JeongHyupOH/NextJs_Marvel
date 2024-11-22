import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/character/:id">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
