 import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

//  const SIGNUP_MUTATION = gql`
//   mutation SignupMutation(
//     $email: String!
//     $password: String!
//     $name: String!
//   ) {
//     signup(
//       email: $email
//       password: $password
//       name: $name
//     ) {
//       token
//     }
//   }
// `;

// const LOGIN_MUTATION = gql`
//   mutation LoginMutation(
//     $email: String!
//     $password: String!
//   ) {
//     login(email: $email, password: $password) {
//       token
//     }
//   }
// `;
 
 const Login = () => {
//    const navigate = useNavigate();
//    const [formState, setFormState] = useState({
//      login: true,
//      email: '',
//      password: '',
//      name: ''
//    });
  

    return (
//       <div>
//         <h4 className="">
//           {formState.login ? 'Login' : 'Sign Up'}
//         </h4>
//         <div className="">
//           {!formState.login && (
//             <input
//               value={formState.name}
//               onChange={(e) =>
//                 setFormState({
//                   ...formState,
//                   name: e.target.value
//                 })
//               }
//               type="text"
//               placeholder="Your name"
//             />
//           )}
//           <input
//             value={formState.email}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 email: e.target.value
//               })
//             }
//             type="text"
//             placeholder="Your email address"
//           />
//           <input
//             value={formState.password}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 password: e.target.value
//               })
//             }
//             type="password"
//             placeholder="Choose a safe password"
//           />
//         </div>
//         <div className="">
//   <button
//     className=""
//     onClick={formState.login ? login : signup}
//   >
//     {formState.login ? 'login' : 'create account'}
//   </button>
//   <button
//     className=""
//     onClick={(e) =>
//       setFormState({
//         ...formState,
//         login: !formState.login
//       })
//     }
//   >
//     {formState.login
//       ? 'need to create an account?'
//       : 'already have an account?'}
//   </button>
// </div>
//             {formState.login
//               ? 'need to create an account?'
//               : 'already have an account?'}
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   const [login] = useMutation(LOGIN_MUTATION, {
//     variables: {
//       email: formState.email,
//       password: formState.password
//     },
//     onCompleted: ({ login }) => {
//       localStorage.setItem(AUTH_TOKEN, login.token);
//       navigate('/');
//     }
//   });
  
//   const [signup] = useMutation(SIGNUP_MUTATION, {
//     variables: {
//       name: formState.name,
//       email: formState.email,
//       password: formState.password
//     },
//     onCompleted: ({ signup }) => {
//       localStorage.setItem(AUTH_TOKEN, signup.token);
//       navigate('/');
//     }
//   });
  
//   export default Login



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