// Please leave html and classNames in place and add in your functionality 

// import React, { useState } from "react";

// const Signup = (props) => {

// }
//   return (
// <div classNameName="log-wrapper">
//   <div classNameName="title">
//     Sign up and start doing good!
//   </div>
//   <form autocomplete="none" id="signup-form" className="login-form">
//     <div className="field">
//     <input autocomplete="off" type="email" id="email" placeholder="Email Address">
//     </div>
//     <div className="field">
//     <input autocomplete="off" type="text" id="username" placeholder="Username">
//     </div>
//      <div className="field">
//     <input type="password" id="password" placeholder="Password">
//     </div>
//     <div className="field">
//     <input type="password" id="confirm" placeholder="Confirm Password">
//     </div>
//       <button className="sign-btn" type='submit'>Create Account</button>
//     <ul className="error-text"></ul>
//     <p className="log-link">
// Already registered? <a href='/login'>Log in here!</a>
//     </p>
//   </form>
// </div>
// )}

// export default Signup
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });
    
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div>
        <div>
          <h4>Sign Up</h4>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Sign up failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

