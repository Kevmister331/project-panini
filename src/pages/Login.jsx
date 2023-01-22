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
        <h2>Welcome Back!</h2>
        <h3>Enter your details to sign</h3>
        <h4>in to your account</h4>
      <form className="login-form" onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email" id="email" name="email"/>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="password" id="password" name="password"/>
        <button2>Having trouble signing in?</button2>
        <button3 type="submit">Log In</button3>
      </form>
      </div>
    )
  }
  
  export default Login