import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navBar';

class App extends Component {
  state = {
    counters:[
      {id:1, value:4, title:'Bob'},
      {id:2, value:0, title:'steve'},
      {id:3, value:0, title:'Stan'},
      {id:4, value:0, title:'paul'}
    ]
  }
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };
  handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters})
  }
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
          <Counters onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counters={this.state.counters}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
