import { useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loader = () => {
  let [loading, setLoading] = useState(true);

  return (
    <div style={{ marginTop: '200px' }}>
      <div className='sweet-loading text-center'>
        <HashLoader color={`#36d7b7`} loading={loading} size={50} />
      </div>
    </div>
  );
};

export default Loader;

