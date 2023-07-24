import React, { useState } from "react";
import './Auth.css'
import { useDispatch } from "react-redux";
import  icon from '../../assets/icon.png'
import AboutAuth from "./AboutAuth";
import { useNavigate } from "react-router-dom";
import {signup,login} from '../../actions/auth'
const Auth = () => {
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [isSignup, setIsSignup] = useState(false);
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
  const handleSwitch = () => {
    setIsSignup(!isSignup);
    // setName("");
     setEmail("");
     setPassword("");
  };
  const handleSubmit=(e)=>{
    
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
     dispatch( signup({ name, email, password },navigate));
    } else {
     dispatch(login({ email, password },navigate));
    }

  }
  return (
    <section className="auth-section">
       {isSignup && <AboutAuth />}
      <div className="auth-container-2">
      {!isSignup && <img src={icon} alt="stack overflow" className="login-logo" />}
      <form onSubmit={handleSubmit}>
      {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
               // value={name}
                onChange={(e) => {
                   setName(e.target.value);
                 }}
              />
            </label>
          )}
      <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" 
               onChange={(e) => {
                 setEmail(e.target.value);
               }}
            />
          </label>
          <label htmlFor="password">
           <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>password</h4>
            { !isSignup && <p style={{ color: "#007ac6", fontSize: "13px" }}>forget password</p>}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              
               onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && <p style={{color:"#666767",fontSize:'13px'}}>Password must contain atleat five character<br/>atleat 1 special character <br /> 1 number and 1 lettre</p>}
          </label>
            {
              isSignup  &&(
                <label htmlFor="check">
                   <input type="checkbox" id="check" style={{height:"25px",width:"25px"}}></input>
                   <p style={{fontSize:'13px'}}>opt to recieve occasional <br />producct updates, user research invitation <br />company announcement and digests</p>
                </label>
              )
            }
          
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
          {
            isSignup &&(
              <p style={{color:"#666767",fontSize:'13px'}}>
                By clicking "signup" you are agree to our
                <span style={{color:"#007ac6"}}> terms of <br /> services</span>,
                <span style={{color:"#007ac6"}}> privacy policy</span> and 
                <span style={{color:"#007ac6"}}> cokiee policy</span>
                
              </p>
            )
          }
      </form>
          <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "sign up"}
          </button>
          </p>
      </div>
    </section>
  )
}

export default Auth