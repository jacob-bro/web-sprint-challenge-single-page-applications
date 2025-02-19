import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";



const App = () => {







  return (
    <div className="header">
      <h1>Punko Foods</h1>
      <p>You have come to the right place for top of the line cuisine at bargain basement prices!!!</p>
      <p>Disclaimer: Food is actually made in an old basement.</p>
      <nav>
        <Link to="/"><button id="home-button">Home</button></Link>
        <Link to="/pizza"><button id="order-pizza">Order Pizza!</button></Link>
      </nav>
  <Switch>
      <Route path="/pizza" component={Form} />
      <Route path="/" component={Home} />
  </Switch>
    </div>
  );
};
export default App;