import { DatePicker } from "antd";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Room from "../components/Room";

const { RangePicker } = DatePicker;

const HomeScreen = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [ roomsData, setRoomsData ] = useState({
    rooms: [],
    loading: true,
    error: false
  });

  const [ dateRange, setDateRange ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/hotel/room/`);
        const data = response.data;
        setRoomsData({ rooms: data, loading: false, error: false });
      } catch (error) {
        setRoomsData({ rooms: [], loading: false, error: true });
        // console.log("Could not fetch", error);
        <Error />;
      }
    };

    fetchData();
  }, [ apiUrl ]);

  const { rooms, loading, error } = roomsData;

  const filterByDate = (dates) => {
    if (dates) {
      const formattedDates = dates.map((date) =>
        moment(date).format("DD-MM-YYYY")
      );
      setDateRange(formattedDates);
    } else {
      setDateRange([]);
    }
  };

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-3 d-flex justify-content-center">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : rooms.length > 0 ? (
          rooms.map((room) => (
            <div key={room.id} className="col-md-9 mt-3">
              <Room room={room} fromDate={dateRange[0]} toDate={dateRange[1]} />
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
