import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");

  const login = async () => {
    setError(""); 

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/v1/accounts/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      if (response.ok) {

        const data = await response.json();
        const access = data.access; 
        const refresh = data.refresh;

        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);        

        navigate("/");
      } else {
        const data = await response.json();
        setError(data.detail);
      }
    } catch (error) {
      setError("Something went wrong, please try again later");
    }
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
            {error && <p className='text-danger'>{error}</p>}
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
