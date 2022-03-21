import React
// add this once state is needed
// ,  { useState } 
 from 'react';



const Login = () => {

  

  return (
   
    <body className='login-page'>
    <div className="log-wrapper">
    <div className="title">
      Welcome Back!
    </div>
    <form autocomplete="none" classNameName="login-form">
      <div className="field">
        <input autocomplete="off" type="text" id="login" placeholder="Username or Email Address"/>
      </div>
      <div className="field">
        <input type="password" id="password" placeholder="Password"/>
      </div>
      <div className="field">
        <div className="forgot-link">
          <a href='/forgot'>Forgot Password?</a>
        </div>
        <button className="log-btn" type='submit'>Log In!</button>
      </div>
      <ul className='error-text'></ul>
      <p className="log-link">
        Not a member? <a href='/signup'>Sign up now!</a>
      </p>
    </form>
  </div>
  </body>
  );
};

export default Login;