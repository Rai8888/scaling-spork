import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Error = () => {
  useEffect(() => {
    showErrorMessage();
  }, []);

  const showErrorMessage = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!'
    });
  };

  return null;
};

export default Error;

