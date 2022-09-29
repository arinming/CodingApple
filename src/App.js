import Header from './Components/Header';
import DayList from './Components/DayList';
import Day from './Components/Day';
import EmptyPage from './Components/EmptyPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch> 
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route> 
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>   
  );
}

export default App;