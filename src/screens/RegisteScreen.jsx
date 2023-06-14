import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    passwordError: false,
    showAlert: false
  });

  useEffect(() => {
    if (formData.password !== formData.cpassword) {
      setFormData((prevFormData) => ({ ...prevFormData, passwordError: true }));
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, passwordError: false }));
    }
  }, [formData.password, formData.cpassword]);

  const register = () => {
    if (formData.password === formData.cpassword) {
      const userRegister = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        cpassword: formData.cpassword
      };
      console.log(userRegister);
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, showAlert: true }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const { name, email, password, cpassword, passwordError, showAlert } = formData;

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>
          <div className='bs'>
            <h2>Register</h2>
            <input type='text' className='form-control' placeholder='name' name='name' value={name} onChange={handleChange} />
            <input type='email' className='form-control' placeholder='email' name='email' value={email} onChange={handleChange} />
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
            {showAlert && (
              <Alert variant='danger' onClose={() => setFormData((prevFormData) => ({ ...prevFormData, showAlert: false }))} dismissible>
                Passwords do not match!
              </Alert>
            )}
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

