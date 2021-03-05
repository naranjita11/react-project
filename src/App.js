// import Stuff from "./Components/Stuff";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Clicked from "./Components/Clicked";
import List from "./Components/List";
import GodCounter from "./Components/GodCounter";
import Square from "./Components/Square";
import People from "./Components/People";
import Footer from "./Components/Footer";
import ToggleText from "./Components/ToggleText";
import TwoCounters from "./Components/TwoCounters";
import TempConverter from "./Components/TempConverter";
import FourOhFour from "./FourOhFour";
import PasswordStrength from "./Components/PasswordStrength";

const App = () => (
  <Router>
    <>
      <Header subtitle="Such fun!">App of Fun</Header>
        <Switch>
          <Route exact path="/">
            <PasswordStrength />
          </Route>
          
          <Route exact path="/clicked">
            <Clicked />
          </Route>
          
          <Route exact path="/list">
            <List />
          </Route>
          
          <Route exact path="/god-counter">
            <GodCounter />
          </Route>

          <Route exact path="/square/:colour" render={ ({ match }) => (
            <Square colour={ match.params.colour } />
          ) } />

          <Route exact path="/people">
            <People names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />
          </Route>

          <Route exact path="/toggle-text">
            <ToggleText initial="such" alternate="fun"/>
          </Route>

          <Route exact path="/two-counters">
            <TwoCounters />
          </Route>

          <Route exact path="/temp-converter">
            <TempConverter />
          </Route>

          <FourOhFour />
        </Switch>
      <Footer />
    </>
  </Router>
 
);

export default App;
