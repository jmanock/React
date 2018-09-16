import React from 'react';
import ReactDOM from 'react-dom';

const app = document.getElementById('root');
const data = [
  {id:1, name:'one', image:require('./images/1.jpg')},
  {id:2, name:'two', image:require('./images/2.jpg')},
  {id:3, name:'three', image:require('./images/3.jpg')},
  {id:4, name:'four', image:require('./images/4.jpg')},
  {id:5, name:'five', image:require('./images/5.jpg')},
  {id:6, name:'six', image:require('./images/6.jpg')},
  {id:7, name:'seven', image:require('./images/7.jpg')},
  {id:8, name:'eight', image:require('./images/8.jpg')},
  {id:9, name:'nine', image:require('./images/9.jpg')},
  {id:10, name:'ten', image:require('./images/10.jpg')},
  {id:11, name:'eleven', image:require('./images/11.jpg')},
  {id:12, name:'twelve', image:require('./images/12.jpg')},
  {id:13, name:'thirteen', image:require('./images/13.jpg')},
  {id:14, name:'fourteen', image:require('./images/14.jpg')},
  {id:15, name:'fifteen', image:require('./images/15.jpg')},
  {id:16, name:'sixteen', image:require('./images/16.jpg')},
  {id:17, name:'seventeen', image:require('./images/17.jpg')},
  {id:18, name:'eighteen', image:require('./images/18.jpg')},
  {id:19, name:'nineteen', image:require('./images/19.jpg')},
  {id:20, name:'twenty', image:require('./images/20.jpg')},
  {id:21, name:'twentyone', image:require('./images/21.jpg')},
  {id:22, name:'twentytwo', image:require('./images/22.jpg')},
  {id:23, name:'twentythree', image:require('./images/23.jpg')},
  {id:24, name:'twentyfour', image:require('./images/24.jpg')},
  {id:25, name:'twentyfive', image:require('./images/25.jpg')},
  {id:26, name:'twentysix', image:require('./images/26.jpg')},
  {id:27, name:'twentyseven', image:require('./images/27.jpg')},
  {id:28, name:'twentyeight', image:require('./images/28.jpg')},
  {id:29, name:'twentynine', image:require('./images/29.jpg')},
  {id:30, name:'thirty', image:require('./images/30.jpg')},
  {id:31, name:'thirtyone', image:require('./images/31.jpg')},
  {id:32, name:'thirtytwo', image:require('./images/32.jpg')},
  {id:33, name:'thirtythree', image:require('./images/33.jpg')},
  {id:34, name:'thirtyfour', image:require('./images/34.jpg')},
  {id:35, name:'thirtyfive', image:require('./images/35.jpg')},
  {id:36, name:'thirtysix', image:require('./images/36.jpg')}
];

class App extends React.Component {
    render() {
        return (
            <Tiles data={this.props.data} />
        );
    }
}

class Tiles extends React.Component {
    render() {
        // Create tile for each item in data array
        // Pass data to each tile and assign a key
        return (
            <div className="tiles">
                {this.props.data.map((data) => {
                    return <Tile data={data} key={data.id} />
                })}
            </div>
        );
    }
}

class Tile extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                open: false,
                mouseOver: false
            };
            // Bind properties to class instance
            this._clickHandler = this._clickHandler.bind(this);
            this._mouseEnter = this._mouseEnter.bind(this);
            this._mouseLeave = this._mouseLeave.bind(this);
        }
        // Event handlers to modify state values
    _mouseEnter(e) {
        e.preventDefault();
        if (this.state.mouseOver === false) {
            console.log(this.props.data.name);
            this.setState({
                mouseOver: true
            })
        }
    }
    _mouseLeave(e) {
        e.preventDefault();
        if (this.state.mouseOver === true) {
            this.setState({
                mouseOver: false
            })
        }
    }
    _clickHandler(e) {
        e.preventDefault();
        if (this.state.open === false) {
            this.setState({
                open: true
            });
        } else {
            this.setState({
                open: false
            });
        }
    }

    render() {
        // Modify styles based on state values
        let tileStyle = {};
        let headerStyle = {};
        let zoom = {};
        // When tile clicked
        if (this.state.open) {
            tileStyle = {
                width: '62vw',
                height: '62vw',
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '0',
                marginTop: '-31vw',
                marginLeft: '-31vw',
                boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
                transform: 'none'
            };
        } else {
            tileStyle = {
                width: '18vw',
                height: '18vw'
            };
        }

        return (
            <div className="tile">
                <img
                    onMouseEnter={this._mouseEnter}
                    onMouseLeave={this._mouseLeave}
                    onClick={this._clickHandler}
                    src={this.props.data.image}
                    alt={this.props.data.name}
                    style={tileStyle}
                />
            </div>
        );
    }
}
ReactDOM.render(<App data={data} />, app)
