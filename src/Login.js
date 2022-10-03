import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "./firebase"

function Login() {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signIn=e=>{
        //avoid react refresshing 
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{navigate('/')})
        .catch(err=>{alert(err.message)})
    }
    const register=e=>{
        //avoid react refresshing 
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>
        {console.log(auth)
        if(auth){
            navigate('/');
        }
        }
        ).catch(err=>{alert(err.message)})
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} 
          onChange={e=>setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input type="password" value={password} 
          onChange={e=>setPassword(e.target.value)}
          />
          
          <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
        </form>
        <p>By signin -in you agree to all of our terms and conditions</p>
        <button className="login__registerButton" onClick={register}>Craete Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
