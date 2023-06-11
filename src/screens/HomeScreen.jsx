import { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../components/Room';

const HomeScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        const data = response.data;
        console.log(data);
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log('Could not fetch', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map(( room ) => {
            return <div className='col-md-9 mt-2'>
                 <Room room={room}/>
            </div>;
          })
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
