import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Success = ({ message }) => {
  useEffect(() => {
    MySwal.fire({
      icon: 'success',
      title: 'Success!',
      text: message
    });
  }, []);

  return <div></div>;
};

export default Success;
