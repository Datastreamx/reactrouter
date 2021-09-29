import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav> */}
      <NavBar />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/discover">{DiscoverMoviesPage}</Route>
        <Route path="/about">{AboutPage}</Route>
        <Route path="/">{HomePage}</Route>
      </Switch>
    </div>
  );
}

export default App;
