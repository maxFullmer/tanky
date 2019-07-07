import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header.js';
import OwnerInfo from './components/OwnerInfo.js';
// import ControlCenter from './components/ControlCenter.js';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerData: [
        {
            owner: "Owner",
            ownerID: 0,
            tankArmory: [
                {
            tankID: 1,
            tankName: "TANK 1",
            pH: 7,
            NH3: 0,
            temperature: 68,
            salinity: 0
                }
            ]
        }
      ],
      currentOwner: 0,
      newName: ""
    }
  }

  componentDidMount() {
    this.getAllOwnerData();
  }

  getAllOwnerData() {
    axios
    .get('/api/owners')
    .then(response => {
      this.setState({
        ownerData: response.data
      })
    })
    .catch(err => console.log(err));
  }

  getNextOwner() {
    if (this.state.currentOwner < this.state.ownerData.length-1) {
        this.setState({
            currentOwner: this.state.currentOwner + 1
        })
    }
}

  getPrevOwner() {
    if (this.state.currentOwner > 0) {
        this.setState({
            currentOwner: this.state.currentOwner - 1
        })
    }
}

  addOwner() {
    axios
    .post('/api/owner')
    .then(response => {
        this.setState({
          ownerData: response.data
        })
      })
    .catch(err => console.log(err));
  }

  updateOwner(id, newName) {
    axios
    .put(`/api/owner/${id}/${newName}`)
    .then(response => {
      this.setState({
        ownerData: response.data
      })
    })
  .catch(err => console.log(err));
  }

  deleteOwner(id) {
    if (this.state.ownerData.length > 1) {
    axios
    .delete(`/api/owner/${id}`)
    .then(response => {
        this.setState({
          ownerData: response.data,

        })
      })
    .catch(err => console.log(err));
    }
    if (id === this.state.ownerData.length - 1) {
      if (this.state.ownerData.length > 1) {
      this.setState({
        currentOwner: id - 1
      })
    }
  }
  }

  render() {
    let {ownerData, currentOwner, newName, owner} = this.state;
    console.log(currentOwner)
    console.log(owner)
    return (
      <div>
        <header>
          <Header />
          <nav className="owner-nav">
            <button onClick={() => this.getPrevOwner()}>{"<"} Prev</button>
            <button onClick={() => this.addOwner()}>New Client</button>
            <button onClick={() => this.getNextOwner()}>Next {">"}</button> 
          </nav>
        </header>

        <main className="main-fill">
          <div className="owner-entity">
            <input 
            tpye="text"
            placeholder="Change name here, then click below..."
            onChange={event => this.setState({ newName: event.target.value })}
            value={newName}
            />
            <div onClick={() => this.updateOwner(currentOwner, newName)}>{ownerData[currentOwner].owner}</div>
            <button onClick={() => this.deleteOwner(currentOwner)}>Sever Relationship</button>
          </div>  
        
          <OwnerInfo 
            ownerData={this.state.ownerData}
            currentOwner={this.state.currentOwner}
          />
        </main>
      </div>
    );
  }
}

export default App;