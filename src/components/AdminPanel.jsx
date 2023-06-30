import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

const AdminPanel = () => {
  const [ bookings, setBookings ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:3000/hotels");
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <div>
      <h1>Admin Panel</h1>
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Room</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.room}</td>
              <td>{booking.fromDate}</td>
              <td>{booking.toDate}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
