import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{
  state = {
    counters:[
      {id:1, value:4, title:'Bob'},
      {id:2, value:0, title:'steve'},
      {id:3, value:0, title:'Stan'},
      {id:4, value:0, title:'paul'}
    ]
  }
  render(){
    return(
      <div>
        {this.state.counters.map(c => <Counter key={c.id}  value={c.value}>
        </Counter>
        )}
      </div>
    );
  }
}

export default Counters;
