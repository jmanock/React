import React, {Component} from 'react';

class Counter extends Component{
  state = {
    value:this.props.value
  };

handleIncrement = () =>{
  this.setState({value: this.state.value +1});
};

  render(){
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button className='btn btn-secondary btn-sm' onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
  formatCounter(){
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
  }
  getBadgeClasses(){
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
