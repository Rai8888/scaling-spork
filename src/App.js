import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import Bookingscreen from "./screens/Bookingscreen";

function App() {
    return <div className="App">
        <Navbar />
        <Routes>
            <Route path="/booking" element={<HomeScreen />} />
            <Route path="/booking/:roomid" component={Bookingscreen} />
        </Routes>
    </div>;
}

export default App;
