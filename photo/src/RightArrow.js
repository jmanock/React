import React from 'react';

const RightArrow = () => {
  return(
    <div className='nextArrow'>
      <i className='fa fa-arrow-right fa-2x' aria-hidden='true' onClick={props.goToNextSlide}></i>
    </div>
  );
}
export default RightArrow;
