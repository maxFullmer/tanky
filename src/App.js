import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tankArmory: [],
      id: 0,
      tankName: "",
      tankOwner: "",
      pH: 7,
      NH3: 0,
      temperature: 68,
      salinity: 0
     };
  }
  render() {
    return (
      <div>
        TANKY
      </div>
    );
  }
}

export default App;