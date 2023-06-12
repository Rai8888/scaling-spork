import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';

const BookingScreen = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post('https://jsonplaceholder.typicode.com/photos', { roomid: match.params.roomid });
        setRoom(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, [match.params.roomid]);

  if (loading) {
    return <Loader />;
  }

  if (error || !room) {
    return <Error />;
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-5'>
          <h1>{room.title}</h1>
          <img src={room.thumbnailUrl} alt='Room Photo' className='bigimg' />
        </div>

        <div className='col-md-5'>
          <div>
            <h1>Booking details</h1>
            <hr />

            <b>
              <p>Name: </p>
              <p>From Date: </p>
              <p>To Date: </p>
              <p>Max count: </p>
            </b>
          </div>
          <div>
            <h1>Amount</h1>
            <hr />

            <b>
              <p>Total days: </p>
              <p>Rent per day: </p>
              <p>Total Amount: </p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingScreen;
