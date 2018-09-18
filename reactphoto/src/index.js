import React from 'react';
import ReactDOM from 'react-dom';

var PhotoGallery = React.createClass({
  getInitialState:function(){
    return {fullScreenPhotoIndex:-1};
  },

  handleFullPhotoClick:function(){
    this.setState({fullScreenPhotoIndex:-1});
  },

  handlePhotoClick:function(photoIndex){
    this.setState({fullScreenPhotoIndex:photoIndex});
  },

  handleBlockClick:function(blockStartIndex,cellIndex){
    this.handlePhotoClick(blockStartIndex + cellIndex);
  },

  handlePhotoNavClick:function(delta,evt){
    var newImageIndex = this.state.fullScreenPhotoIndex + delta;
    if(newImageIndex < 0){
      newImageIndex = this.props.photoURLs.length -1;
    }else if(newImageIndex >= this.props.photoURLs.length){
      newImageIndex = 0;
    }
    this.setState({fullScreenPhotoIndex:newImageIndex});
    evt.preventDefault();
    evt.stopPropagation();
  },

  render:function(){
    var photoBlocks = [];
    var numImages = this.props.photURLs.length;
    var currentImageIndex = 0;

    while(currentImagesIndex < numImages){
      var photoBlockImages = [];
      var photoBlockClickCallback = this.handleBlockClick.bind(this, currentImageIndex);

      var numImagesInBlock = this.getNumImagesInPhotoBlock(photoBlocks.length);
      for(var i = 0; i < numImagesInBlock && currentImageIndex < numImages; i++){
        photoBlockImages.push(this.props.photoURLs[currentImageIndex++]);
      }
      photoBlocks.push(<PhotoBlock images={photoBlockImages} onPhotoClick={photoBlockClickCallback} />);
    }

    var fullPhotoURL = null;
    var fullPhotoImageIndex = this.state.fullScreenPhotoIndex;
    if(fullPhotoImageIndex >= 0 && fullPhotoImageIndex < numImages){
      fullPhotoURL = this.props.photoURLs[fullPhotoImageIndex];
    }
    return(
      <div className='photGallery'>
        {photoBlocks}
        <FullPhoto photoURL={fullPhotoURL} onClick={this.handleFullPhotoClick}>
          <PhotoNav className='photoNav leftArrow' onClick={this.handlePhotoNavClick.bind(this,-1)} />
          <PhotoNave className='photoNav rightArrow' onClick={this.handlePhotoClick.bind(this,1)} />
        </FullPhoto>
      </div>
    );
  },

  getNumImagesInPhotoBlock:function(blockIndex){
    var layoutConfig = [1,2,3,4];
    return layoutConfig[blockIndex % layoutConfig.length];
  }
});

var PhotoBlock = React.createClass({
  render:function(){
    var numImages = this.props.images.length;
    if(numImages == 1){
      return(
        <div className='photoBlock'>
          <Photo onClick={this.props.onPhotoClick.bind(this,0)} className='cell_1' photoURL={this.props.images[0]} />
        </div>
      );
    }else if(numImages == 2){
      <div className='photoBlock'>
        <Photo onClick={this.props.onPhotoClick.bind(this,0)} className='cell_2h' photoURL={this.props.images[0]} />
        <Photo onClick={this.props.onPhotoClick.bind(this,1)} className='cell_2h' photoURL={this.props.images[1]} />
      </div>
    }else if(numImages === 3){
      <div className='photoBlock'>
        <Photo onClick={this.props.onPhotoClick.bind(this,0)} className='cell_2v' photoURL={this.props.images[0]} />
        <Photo onClick={this.props.onPhotoClick.bind(this,1)} className='cell_4' photoURL={this.props.images[1]} />
        <Photo onClick={this.props.onPhotoClick.bind(this,2)} className='cell_4' photoURL={this.props.images[2]} />
      </div>
    }else{
      return(
        <div className='photoBlock'>
          <Photo onClick={this.props.onPhotoClick.bind(this,0)} className='cell_4' photoURL={this.props.images[0]} />
          <Photo onClick={this.props.onPhotoClick.bind(this,1)} className='cell_4' photoURL={this.props.images[1]} />
          <Photo onClick={this.props.onPhotoClick.bind(this,2)} className='cell_4' photoURL={this.props.images[2]} />
          <Photo onClick={this.props.onPhotoClick.bind(this,3)} className='cell_4' photoURL={this.props.images[3]} />
        </div>
      );
    }
  }
});

var Photo = React.createClass({
  render:function(){
    var divStyle = {
      backgroundImage:'url('+this.props.photoURL +')'
    };
    return(
      <div className={'photoPreview'+this.props.className} style={divStyle} onClick={this.props.onClick} />
    );
  }
});

var FullPhoto = React.createClass({
  render:function(){
    if(!this.props.photURL){
      return(<div />);
    }
    return(
      <div className='fullPhoto' onClick={this.props.onClick}>
        <img src={this.props.photoURL} /> {this.props.children}
      </div>
    );
  }
});

var 
