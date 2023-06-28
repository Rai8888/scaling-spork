import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
  const [ loading ] = useState(true);

  return (
    <div style={{ margin: "25vh 0 0 56vw" }}>
      <div className='sweet-loading text-center'>
        <RingLoader color='#000000' loading={loading} size={150} />
      </div>
    </div>
  );
};

export default Loader;

