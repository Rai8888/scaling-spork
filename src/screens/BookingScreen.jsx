import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';

const BookingScreen = ({ match }) => {
  const roomId = match.params.roomid;
  const fromDate = dayjs(match.params.fromDate, 'DD-MM-YYYY');
  const toDate = dayjs(match.params.toDate, 'DD-MM-YYYY');
  const totalDays = toDate.diff(fromDate, 'day') + 1;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/photos', { roomid: roomId });
        setRoom(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [roomId]);

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
              <p>From Date: {fromDate.format('DD-MM-YYYY')}</p>
              <p>To Date: {toDate.format('DD-MM-YYYY')}</p>
              <p>Max count: </p>
            </b>
          </div>
          <div>
            <h1>Amount</h1>
            <hr />

            <b>
              <p>Total days: {totalDays}</p>
              <p>Rent per day: </p>
              <p>Total Amount: </p>
            </b>
          </div>
          <div style={{ float: 'right' }}>
            <button className='btn btn-primary'>Pay now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingScreen;

