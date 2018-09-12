import React from 'react';

export class Child extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const name = e.target.value;
    this.props.onChange(name);
  }

  render(){
    return(
      <div>
        <select id='great-names' onChange={this.handleChange}>
          <option value='Fucker'>Fucker</option>
          <option value='Great'>Great</option>
          <option value='Stinker'>Stinker</option>
        </select>
      </div>
    );
  }
}
