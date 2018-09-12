import React from 'react';
import ReactDOM from 'react-dom';
import {Child} from './Welcome';
import {Sibling} from './Home';

class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:'Fucker'};
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName){
    this.setState({
      name:newName
    });
  }

  render(){
    return(
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name}/>
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'));
