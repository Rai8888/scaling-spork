import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BookingScreen from './screens/BookingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisteScreen';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/booking' element={<HomeScreen />} />
        <Route path='/booking/:roomid/:fromDate/:toDate' element={<BookingScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/login' element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;

