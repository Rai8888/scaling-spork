import { Link } from 'react-router-dom';
import { useState } from 'react';

const Room = ({ room }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='row bs'>
      <div className='col-md-4'>
        <img src={room.url[0]} alt='Hotel Image' className='smailing' />
      </div>
      <div className='col-md-6'>
        <h1>{room.id}</h1>
        <b>
          <p>Max count: {room.maxCount}</p>
          <p>Phone number: {room.url}</p>
          <p>Type: {room.albumId}</p>
        </b>
      </div>
      <div style={{ textAlign: 'right' }}>
        <Link to={`/book/${room.id}`}>
          <button className='btn btn-primary m-2'>Book now</button>
        </Link>
        <button className='btn btn-primary' onClick={handleShow}>
          View details
        </button>
      </div>
    </div>
  );
};

export default Room;
