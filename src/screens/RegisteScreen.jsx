import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    passwordError: false,
    showAlert: false
  });

  useEffect(() => {
    const { password, cpassword } = formData;
    const passwordError = password !== cpassword;
    setFormData((prevFormData) => ({ ...prevFormData, passwordError }));
  }, []);

  const register = async () => {
    const { password, cpassword, name, email } = formData;
    if (password === cpassword) {
      const userRegister = {
        username: name,
        name,
        email,
        password,
        cpassword
      };
      try {
        const response = await fetch(`${apiUrl}/api/v1/accounts/register/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userRegister)
        });

        if (response.ok) {
          const data = await response.json();
          
          const access = data.access; 
          const refresh = data.refresh

          localStorage.setItem('access', access);
          localStorage.setItem('refresh', refresh);

          navigate('/'); 
        } else {
          const errorMessage = await response.text();
          console.log('Error:', errorMessage);
          setFormData((prevFormData) => ({ ...prevFormData, showAlert: true }));
        }
      } catch (error) {
        console.log('Error:', error);
        setFormData((prevFormData) => ({ ...prevFormData, showAlert: true }));
      }
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
                Something went wrong, please try again later!
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

