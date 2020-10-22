// import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import {auth} from "./Firebase"

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event =>{
        event.preventDefault(); //this stops the refresh
        // login logic 
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) =>{
                // logged in, redirect to homepage
                history.push("/")
            })
            .catch((e)=> alert(e.message));
    }

    const register = event =>{
        event.preventDefault(); //this stops the refresh
        // register logic 
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth =>{
            // registered, redirect to homepage
            history.push("/")
        })
        .catch((e)=> alert(e.message));
    };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
        </form>

        <p>
          By signing in you agree to BackYard's condition of use & sale. Please
          see our Privacy notice, our cookies notice and our interest-based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">Create your BackYard Account</button>

        <Link to="/">
          <h4>Back Home</h4>
        </Link>
      </div>
    </div>
  );
}

export default Login;
