import Header from "./Header";
import Home from "./Home";
import CountryDet from "./CountryDet";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useEffect, useState } from "react";


function App() {
  const [text, setText] = useState("Dark Mode")


  

  return (
    <Router>
      <div className="text-black dark:text-lightMode-100 bg-lightMode-200 dark:bg-darkMode-200 h-full">
        <Header/>
        <div className="">
              <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/CountryDet/:id" component={CountryDet}>
                  <CountryDet/>
                </Route>
              </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
