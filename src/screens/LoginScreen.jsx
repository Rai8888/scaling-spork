import { useState } from 'react';

const LoginScreen = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const login = () => {
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const { email, password } = formData;

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
