import React,{Component} from 'react';

class Testing extends Component{
  state = {
    name:'Beez',
    age:100
  }
  handleChange = (e) =>{
    this.setState({
      name:e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submited '+this.state.name);
  }
  render(){
    return(
      <div className='app-content'>
        <h1>The name of my wife is {this.state.name}.</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default Testing;
