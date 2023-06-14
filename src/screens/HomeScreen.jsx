import { DatePicker } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Room from '../components/Room';
const { RangePicker } = DatePicker;

const HomeScreen = () => {
  const [roomsData, setRoomsData] = useState({
    rooms: [],
    loading: true,
    error: false
  });

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

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

  const filterByDate = (dates) => {
    setFromDate(moment(dates[0]).format('DD-MM-YYYY'));
    setToDate(moment(dates[1]).format('DD-MM-YYYY'));
  };

  return (
    <div className='container'>
      <div className='row-mt-5'>
        <div className='col-md-3'>
          <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
        </div>
      </div>

      <div className='row justify-content-center mt-5'>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : rooms.length > 0 ? (
          rooms.map((room) => (
            <div key={room.id} className='col-md-9 mt-3'>
              <Room room={room} fromDate={fromDate} toDate={toDate} />
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

