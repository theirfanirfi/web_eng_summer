import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
class App extends Component {

  state = {
    tvStatus: 'off',
  }

componentDidMount(){
 // alert('this is Component did mount'); 
}

changeTvStatus = () => {
  // if(this.state.tvStatus == 'off') {
  //   this.setState({
  //     tvStatus: 'on'
  //   })
  // }else {
  //   this.setState({
  //     tvStatus: 'off'
  //   })
  // }

  this.setState({
    tvStatus: this.state.tvStatus == 'off' ? 'on' : 'off'
  })
}

  render(){
    return (
      <div>
      <h1>TV status: {this.state.tvStatus}</h1>

      <button onClick={this.changeTvStatus} >{
        this.state.tvStatus == 'off' ? 'on' : 'off'
      }</button>

      </div>
      )
  }
}


export default App;
