import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Register from "./Component/Register";
import { Switch, Route } from "react-router-dom";
import Errorpage from "./Component/Errorpage";
import Edit from "./Component/Edit";
import Details from "./Component/Details";



const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/edit/:id" component={Edit}></Route>
        <Route exact path="/view/:id" component={Details}></Route>
        <Route exact path="/*" component={Errorpage}></Route>
        
      </Switch>
     
    </>
  )
}
export default App;