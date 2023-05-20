import { useState, useEffect } from "react";

const Preloader = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`loader ${!showLoader && "loader-hide"}`}>
      <div className='loader__content'>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
      </div>
    </div>
  );
};

export default Preloader;
