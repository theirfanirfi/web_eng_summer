import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';

import CounterComponent from './components/CounterComponent';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
    tvStatus: 'off',
  }

  }




componentDidMount(){
 // alert('this is Component did mount'); 
}



changeTvStatus = (on_off) => {
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
    tvStatus: on_off
  })
}

renderOffButton = () => {
  return <button onClick={() => this.changeTvStatus('off')} >Off</button>
}

 renderOnButton = () => {
  return <button onClick={() => this.changeTvStatus('on')} >On</button>
}

  render(){
    // this.setState({
    //   tvStatus: 'on'
    // })
    return (
      <div>
      <h1>TV status: {this.state.tvStatus}</h1>
      {
        this.state.tvStatus == 'off' ? 
        this.renderOnButton() :
        this.renderOffButton()
      }
      <CounterComponent tvStatus={this.state.tvStatus} hardCodedValue='Student' />
      </div>
      )
  }
}


export default App;
