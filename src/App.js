import { Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import NavBar from './components/Navbar.jsx';
import { routes } from './routes/routes';

function App() {
  const renderRoutes = routes.map((route, index) => <Route key={index} path={route.path} element={route.element} />);

  return (
    <div className='App'>
      <NavBar />
      <Routes>{renderRoutes}</Routes>
    </div>
  );
}

export default App;

