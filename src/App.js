import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import BookingScreen from "./screens/BookingScreen";
import RegisteScreen from './screens/RegisteScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
    return <div className="App">
        <Navbar />
        <Routes>
            <Route path="/booking" element={<HomeScreen />} />
            <Route path="/booking/:roomid" element={<BookingScreen />} />
            <Route path="/register" element={<RegisteScreen />} />
            <Route path="/login" element={<LoginScreen />} />
        </Routes>
    </div>;
}

export default App;
