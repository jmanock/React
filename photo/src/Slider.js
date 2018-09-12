import React from 'react';
import {Slid} from './Slid';
import {LeftArrow} from './LeftArrow';
import {RightArrow} from './RightArrow';

export default class Slider extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div className='slider'>
        <Slid />
        <LeftArrow />
        <RightArrow />
      </div>
    );
  }
}
