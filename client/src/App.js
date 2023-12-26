import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Register from "./Component/Register";
import { Switch, Route } from "react-router-dom";
import Errorpage from "./Component/Errorpage";
import Edit from "./Component/Edit";
import Details from "./Component/Details";
import Login from "./Component/login/Login";
/*import PrivateRoute from "./PrivateRoute";*/




const App = () => {
  {/*const [isAuthenticated, setAuthenticated]=useState(false);*/}

  return (
    <>
   
     
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/home" component={Home} ></Route>
        <Route path="/register" component={Register}></Route>
        <Route exact path="/edit/:id" component={Edit}></Route>
        <Route exact path="/view/:id" component={Details}></Route>
        <Route exact path="/*" component={Errorpage}></Route>  
      </Switch>
     
    </>
  )
}
export default App;