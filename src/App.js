import React, { Component } from 'react';
import md5 from 'md5';
import logo from './logo.svg';
import './App.css';

const divStyle = {
  color: '#ffffff',
  display: 'inline-block',
  width: '20%',
  padding: '10px',
}

const Ascii = ({ children, sat, light }) => {
  const color = Math.round(360 * parseInt(md5(children), 16) / Math.pow(16, 32));
  console.log(color);
  return (<div style={{ backgroundColor: `hsl(${color}, ${sat}%, ${light}%)`, ...divStyle}}>
    {children}
  </div>)
}


const categories = ['Category 1, Category 2, Category 3, Category 4']

class App extends Component {

  constructor() {
    super();
    this.state = {
      sat: 50,
      light: 50,
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          Saturation ({this.state.sat})
        <input type="range" min="0" max="100" value={this.state.sat} onChange={e => this.setState({ sat: e.target.value })} class="slider" id="myRange"/>
        </div>
        <div style={{ paddingBottom: '30px'}}>
        Lightness ({this.state.light})
        <input type="range" min="0" max="100" value={this.state.light} onChange={e => this.setState({ light: e.target.value })} class="slider" id="myRange"/>
        </div>
        {categories.map(c => <Ascii sat={this.state.sat} light={this.state.light} >{c}</Ascii>)}
      </div>
    );
  }
}

export default App;
