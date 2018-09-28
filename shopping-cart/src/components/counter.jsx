import React, {Component} from 'react';

class Counter extends Component{
  render(){
    return(
      <div>
        <h4>{this.props.c.title}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm' onClick={() => this.props.onIncrement(this.props.c)}>Increment</button>
        <button className='btn btn-danger btn-sm m-2' onClick={() => this.props.onDelete(this.props.c.id)}>Delete</button>
      </div>
    );
  }

  formatCount(){
    const {value} = this.props.c;
    return value === 0 ? 'Zero not a Hero' : value;
  }

  getBadgeClasses(){
    let classes = 'badge m-2 badge-';
    classes += this.props.c.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
