import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{
  render(){
    const {counters, onDelete, onIncrement, onReset} = this.props;
    return(
      <div>
        <button className='btn btn-primary m-2' onClick={onReset}>Reset</button>
        {counters.map(c => <Counter key={c.id}  c={c} onDelete={onDelete} onIncrement={onIncrement}>

        </Counter>
        )}
      </div>
    );
  }
}

export default Counters;
