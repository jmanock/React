import React from 'react';
import ReactDOM from 'react-dom';

class FormApp extends React.Component{
  render(){
    return(
      <div className='container'>
        <Header />
        <ContentBody />
      </div>
    );
  }
}

class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <h2>React Form Application</h2>
    );
  }
}

class ContentBody extends React.Component{
  render(){
    return(
      <div className='row'>
        <div className='col-md-12'>
          <FormBody />
        </div>
      </div>
    );
  }
}

class FormBody extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      email:'',
      fullname:'',
      data:[]
    };
    this.saveFormData = this.saveFormData.bind(this);
  }
  saveFormData(e){
    var myArr = this.state.data;
    myArr.push({
      username:ReactDOM.findDomNode(this.refs.username).value,
      email:ReactDOM.findDOMNode(this.refs.useremail).value,
      fullname:ReactDOM.findDOMNode(this.refs.fullname).value
    });
    this.setState({data:myArr});
    ReactDOM.findDOMNode(this.refs.username).value = '';
    ReactDOM.findDOMNode(this.refs.useremail).value='';
    ReactDOM.findDOMNode(this.refs.fullname).value='';
  }
  render(){
    return(
      <form name='userform' id='userform'>
        <div className='form-group'>
          <label>User Name</label>
          <input className='form-control' name='username' id='username' ref='username' placeholder='Please provide username'/>
        </div>
        <div className='form-group'>
          <label>User Email</label>
          <input className='form-control' name='useremail' id='useremail' ref='useremail' placeholder='Please provide email'/>
        </div>
        <div className='form-group'>
          <label>Full Name</label>
          <input className='form-control' name='fullname' ref='fullname' placeholder='Please provide full name' />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary' onClick={this.saveFormData} type='button'>Save</button>
        </div>
        <ul className='text-muted'>
          {this.state.data.map((single,i)=> <DataUL key={i} singlerecord={single} />)}
        </ul>
      </form>
    );
  }
}

class DataUL extends React.Component{
  render(){
    return(
      <li>{this.props.singlerecord.username}, {this.props.singlerecord.email}, {this.props.singlerecord.fullname}</li>
    );
  }
}

ReactDOM.render(<FormApp />, document.getElementById('root'));
