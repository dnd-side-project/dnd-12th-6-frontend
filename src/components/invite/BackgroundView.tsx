import React from 'react';

const BackgroundView = () => {
  return (
    <div
      className='fixed w-full max-w-content min-h-dvh bg-center bg-cover bg-no-repeat z-[-1]'
      style={{ backgroundImage: `url("/images/_mock/mock_background.jpg")` }}
    ></div>
  );
};

export default BackgroundView;
