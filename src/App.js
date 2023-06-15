import { Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import NavBar from './components/Navbar.jsx';
import { routes } from './routes/routes';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;

