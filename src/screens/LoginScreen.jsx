import { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log({ email, password });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>
          <div className='bs'>
            <h2>Login</h2>
            <input type='email' className='form-control' placeholder='Email' value={email} onChange={handleEmailChange} />
            <input type='password' className='form-control' placeholder='Password' value={password} onChange={handlePasswordChange} />
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

