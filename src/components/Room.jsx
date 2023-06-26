import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Room = ({ room, fromDate, toDate }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='row bs'>
      <div className='col-md-4'>
        <img src={room.thumbNailUrl} alt={room.id} className='smailing' />
      </div>
      <div className='col-md-6'>
        <h1>{room.name}</h1>
        <b>
          <p>CountryCode: {room.countryCode}</p>
          <p>Address1: {room.address1}</p>
          <p>HotelRating: {room.hotelRating}</p>
        </b>
      </div>
      <div style={{ textAlign: 'right' }}>
        <Link to={`/book/${room.id}/${fromDate}/${toDate}`}>
          <button className='btn btn-primary m-2'>Book now</button>
        </Link>
        <button className='btn btn-primary' onClick={handleShow}>
          View details
        </button>
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel='' nextLabel=''>
            {/* {room.urlImgs.map((urlImg) => {
              return (
                <Carousel.Item>
                  <img className='d-block w-100 bigimg' src={urlImg} alt='Photo Slide' />
                </Carousel.Item>
              );
            })} */}
          </Carousel>
          <p>{room.shortDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;

