import React from 'react';

const ScrollButton = () => {
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div className='w-[90%] m-auto text-center mb-[60px] '>
      <button onClick={topFunction}>scroll to top</button>
    </div>
  );
};

export default ScrollButton;
