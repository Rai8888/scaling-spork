import React, { useState } from 'react';

const LoginScreen = () => {
  const [state, setState] = useState({ email: '', password: '' });

  const login = () => {
    const userLogin = {
      email: state.email,
      password: state.password,
    };
    console.log(userLogin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const { email, password } = state;

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>
          <div className='bs'>
            <h2>Login</h2>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleChange}
            />
            <button className='btn btn-primary mt-3' onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
