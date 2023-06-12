import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const RegisterScreen = () => {
  const [state, setState] = useState({ name: '', email: '', password: '', cpassword: '', passwordError: false });

  useEffect(() => {
    if (state.password !== state.cpassword) {
      setState((prevState) => ({ ...prevState, passwordError: true }));
    } else {
      setState((prevState) => ({ ...prevState, passwordError: false }));
    }
  }, [state.password, state.cpassword]);

  const register = () => {
    if (state.password === state.cpassword) {
      const userRegister = {
        name: state.name,
        email: state.email,
        password: state.password,
        cpassword: state.cpassword,
      };
      console.log(userRegister);
    } else {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const { name, email, password, cpassword, passwordError } = state;

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>
          <div className='bs'>
            <h2>Register</h2>
            <input
              type='text'
              className='form-control'
              placeholder='name'
              name='name'
              value={name}
              onChange={handleChange}
            />
            <input
              type='email'
              className='form-control'
              placeholder='email'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <input
              type='password'
              className='form-control'
              placeholder='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
            <input
              type='password'
              className='form-control'
              placeholder='confirm password'
              name='cpassword'
              value={cpassword}
              onChange={handleChange}
            />
            {passwordError && <p className='text-danger'>Passwords do not match!</p>}
            <button className='btn btn-primary mt-3' onClick={register}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
