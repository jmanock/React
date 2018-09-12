import React from 'react';

const LeftArrow = () => {
  return(
    <div className='backArrow' onClick={props.gotToPrevSlide}>
      <i className='fa fa-arrow-left fa-2x' aria-hidden='true'></i>
    </div>
  );
}

export default LeftArrow;
