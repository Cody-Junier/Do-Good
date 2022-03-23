import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <body className="login-page">
      <div className="log-wrapper">
        <div className="title">Welcome Back!</div>
        <form
          autocomplete="none"
          classNameName="login-form"
          onSubmit={handleFormSubmit}
        >
          <div className="field">
            <input
              className="field"
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <input
              className="field"
              placeholder="******"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <div className="forgot-link">
              <a href="/forgot">Forgot Password?</a>
            </div>
            <button className="log-btn" type="submit">
              Submit
            </button>
          </div>
          <ul className="error-text"></ul>
          <p className="log-link">
            Not a member? <a href="/signup">Sign up now!</a>
          </p>
        </form>
        {error && <div>Login failed</div>}
      </div>
    </body>
    // <main className="login-page">
    //   <div>
    //     <div>
    //       <h4 className="title">Login</h4>
    //       <div className="log-wrapper">
    //         <form onSubmit={handleFormSubmit}>
    //           <input
    //             className='field'
    //             placeholder='Your email'
    //             name='email'
    //             type='email'
    //             id='email'
    //             value={formState.email}
    //             onChange={handleChange}
    //           />
    //           <input
    //             className='field'
    //             placeholder='******'
    //             name='password'
    //             type='password'
    //             id='password'
    //             value={formState.password}
    //             onChange={handleChange}
    //           />
    //           <button className="submit-btn" type='submit'>

    //           </button>
    //         </form>
    //         {error && <div>Login failed</div>}
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default Login;
