import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas:[
      {name:'Steve', age:'55', belt:'white', id:1},
      {name:'James', age:'65', belt:'black', id:2},
      {name:'Peez', age:'25', belt:'green', id:3},
      {name:'Mark', age:'30', belt:'red', id:4}
    ]
  }
  addNinja = (x) =>{
    x.id = Math.random();
    let ninjas = [...this.state.ninjas, x];
    this.setState({
      ninjas:ninjas
    });
  }
  render(){
    return(
      <div>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
};

export default App;
