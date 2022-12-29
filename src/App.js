import Header from "./Header";
import Home from "./Home";
import CountryDet from "./CountryDet";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ThemeContextProvider from "./Hooks/ThemeContext";


function App() {

  return (
    <Router>
      <div className="h-full">
        <div className="">
          <ThemeContextProvider>
            <Header/>
            <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/CountryDet/:id" component={CountryDet}>
                <CountryDet/>
              </Route>
            </Switch>
          </ThemeContextProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
