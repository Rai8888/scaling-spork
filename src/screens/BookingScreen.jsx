import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';

const BookingScreen = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);

  const roomId = match.params.roomid; // переобразовать до 18
  const fromDate = match.params.fromDate;
  const toDate = match.params.toDate;

  const totalDays = moment.duration(toDate.diff(fromDate));

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
              <p>From Date: {match.params.fromDate} </p>
              <p>To Date: {match.params.toDate} </p>
              <p>Max count: </p>
            </b>
          </div>
          <div>
            <h1>Amount</h1>
            <hr />

            <b>
              <p>Total days: {totalDays} </p>
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

