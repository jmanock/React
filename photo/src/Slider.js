import React from 'react';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow form './RightArrow'

export default class Slider extends React.Component{
  constructor(props){
    super(props);

    this.state{
      images:['one', 'two', 'three', 'four', 'five'],
      currentIndex:0;
    };
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex:prevState.currentIndex + 1
    }));
  }

  render(){
    return(
      <div className='slider'>
        <Slide />
        <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}
