import BookingScreen from '../screens/BookingScreen';
import HomeScreen from '../screens/HomeScreen';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisteScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

export const routes = [
  { path: '/', element: <LandingScreen /> },
  { path: '/booking', element: <HomeScreen /> },
  { path: '/booking/:roomid/:fromDate/:toDate', element: <BookingScreen /> },
  { path: '/register', element: <RegisterScreen /> },
  { path: '/login', element: <LoginScreen /> },
  { path: '*', element: <NotFoundScreen /> }
];

