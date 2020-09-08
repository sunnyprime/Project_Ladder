import React,{Fragment} from 'react';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Component/Header/Navbar';
import Service from './Pages/Service';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Feedback from './Pages/Feedback';
import Error from './Pages/Error'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/service"><Service /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route exact path="/feedback"><Feedback /></Route>
        <Route path="*"><Error /></Route>
        </Switch>
        </Router>
    </Fragment>
  );
}

export default App;
