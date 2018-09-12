import React from 'react';
import {Slid} from './Slid';
import {LeftArrow} from './LeftArrow';
import {RightArrow} from './RightArrow';

export default class Slider extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      images:[''],
      currentIndex:0
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
        {
          this.state.images.map((image,i) =>(
            <Slid key={i} image={image} />
          ))
        }
        
        <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
        <RightArrow goToNextSlide={this.goToNextSlide}/>
      </div>
    );
  }
}
