import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shoppage/ShopPage.component";
import Header from "./components/header/Header.component";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
