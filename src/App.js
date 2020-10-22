import React, { useEffect } from "react";
import Header1 from "./Header1";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import "./App.css";
import { useStateValue } from "./StateProvider";
import {auth} from "./Firebase";

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        // the user is logged in  
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        // the user is logged out  
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      // cleanup operations 
      unsubscribe();
    }
  },[]);
  return (
    <Router>
      <div className="app">
        <Header1 />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
