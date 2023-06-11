import { useEffect, useState } from 'react';
import axios from 'axios';

const Bookingscreen = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post('https://jsonplaceholder.typicode.com/photos', { roomid: match.params.roomid }).data;
        setRoom(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <h1>Error...</h1>
      ) : (
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
                  <p>To Data: </p>
                  <p>Max count: </p>
                </b>
              </div>
              <div>
                <h1>Amout</h1>
                <hr />

                <b>
                  <p>Total days: </p>
                  <p>Rent per day: </p>
                  <p>Total Amout</p>
                </b>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookingscreen;

