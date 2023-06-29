import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const[ isAuthenticated, setIsAuthenticated ] = useState(false);

  useEffect(() => {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    if (access && refresh) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuthenticated(false);
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <Link className='navbar-brand' to='/'>
          Hotel Booking
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            {isAuthenticated ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/profile'>
                    Go to Profile
                  </Link>
                </li>
                <li className='nav-item'>
                  <button className='nav-link' onClick={handleLogout}>
                    Выход
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item active'>
                  <Link className='nav-link' to='/register'>
                    Регистрация
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Вход
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
