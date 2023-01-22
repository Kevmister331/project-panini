import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

    return (
      <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
      <img id="panini2" src={require("../images/panini.png")} alt="logo"></img>
      <h2 id="black">Welcome Back!</h2>
        <p id="black">Enter your details to sign</p>
        <p id="black">in to your account</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email" id="email" name="email"/>
        <h5>  </h5>
        <h5>  </h5>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="password" id="password" name="password"/>
        <button2>Having trouble signing in?</button2>
        <button class="submit" type="submit">Log In</button>
        <h5>OR</h5>
        <button class="submit" type="submit">Sign up with email</button>
        <button class="submit" type="submit">Sign up with Google</button>
      </form>
      </div>
    )
  }
  
  export default Login