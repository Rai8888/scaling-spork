import { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';

const HomeScreen = () => {
  const [roomsData, setRoomsData] = useState({
    rooms: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        const data = response.data;
        setRoomsData({ rooms: data, loading: false, error: false });
      } catch (error) {
        setRoomsData({ rooms: [], loading: false, error: true });
        console.log('Could not fetch', error);
      }
    };

    fetchData();
  }, []);

  const { rooms, loading, error } = roomsData;

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : rooms.length > 0 ? (
          rooms.map((room) => (
            <div key={room.id} className='col-md-9 mt-3'>
              <Room room={room} />
            </div>
          ))
        ) : (
          <p>No rooms available.</p>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
