import React from 'react';

const LeftArrow = () => {
  return(
    <div className='backArrow'>
      <i className='fa fa-arrow-left fa-2x' aria-hidden='true' onClick={goToPrevSlide}></i>
    </div>
  );
}
export default LeftArrow;
