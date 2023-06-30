import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";

const AdminPanel = () => {
  const [ bookings, setBookings ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ newBooking, setNewBooking ] = useState({ room: "", fromDate: "", toDate: "" });
  const [ editingBooking, setEditingBooking ] = useState(null);
  const [ updatedData, setUpdatedData ] = useState({ room: "", fromDate: "", toDate: "" });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("");
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // console.error(error);
        <Error />;
      }
    };

    fetchBookings();
  }, []);

  // Добавление нового бронирования
  const handleAddBooking = async () => {
    try {
      const response = await axios.post("", newBooking);
      setBookings([ ...bookings, response.data ]);
      setNewBooking({ room: "", fromDate: "", toDate: "" });
    } catch (error) {
      // console.error(error);
      <Error />;

    }
  };

  // Редактирование бронирования
  const handleEditBooking = async (bookingId, updatedData) => {
    try {
      const response = await axios.put(`/${bookingId}`, updatedData);
      const updatedBookings = bookings.map((booking) => (booking.id === bookingId ? response.data : booking));
      setBookings(updatedBookings);
      setEditingBooking(null);
    } catch (error) {
      // console.error(error);
      <Error />;
    }
  };

  // Удаление бронирования
  const handleDeleteBooking = async (bookingId) => {
    try {
      await axios.delete(`/${bookingId}`);
      const updatedBookings = bookings.filter((booking) => booking.id !== bookingId);
      setBookings(updatedBookings);
    } catch (error) {
      // console.error(error);
      <Error />;
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <form>
        <input
          type="text"
          value={newBooking.room}
          onChange={(e) => setNewBooking({ ...newBooking, room: e.target.value })}
          placeholder="Room"
        />
        <input
          type="date"
          value={newBooking.fromDate}
          onChange={(e) => setNewBooking({ ...newBooking, fromDate: e.target.value })}
          placeholder="From Date"
        />
        <input
          type="date"
          value={newBooking.toDate}
          onChange={(e) => setNewBooking({ ...newBooking, toDate: e.target.value })}
          placeholder="To Date"
        />
        <button onClick={handleAddBooking}>Добавить</button>
      </form>

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
            {bookings.map(({ id, room, fromDate, toDate }) => {
              if (editingBooking === id) {
                // Режим редактирования
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      <input type="text" value={updatedData.room} onChange={(e) => setUpdatedData({ ...updatedData, room: e.target.value })} />
                    </td>
                    <td>
                      <input type="date" value={updatedData.fromDate} onChange={(e) => setUpdatedData({ ...updatedData, fromDate: e.target.value })} />
                    </td>
                    <td>
                      <input type="date" value={updatedData.toDate} onChange={(e) => setUpdatedData({ ...updatedData, toDate: e.target.value })} />
                    </td>
                    <td>
                      <button onClick={() => handleEditBooking(id, updatedData)}>Сохранить</button>
                      <button onClick={() => setEditingBooking(null)}>Отмена</button>
                    </td>
                  </tr>
                );
              } else {
                // Режим просмотра
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{room}</td>
                    <td>{fromDate}</td>
                    <td>{toDate}</td>
                    <td>
                      <button onClick={() => setEditingBooking(id)}>Редактировать</button>
                      <button onClick={() => handleDeleteBooking(id)}>Удалить</button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminPanel;
