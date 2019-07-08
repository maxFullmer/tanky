import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header.js';
import OwnerInfo from './components/OwnerInfo.js';
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
      newOwnerName: ""
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

  //OWNER FUNCTIONALITY

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
    .catch(err => console.log(err))
  }

  updateOwner(id, newOwnerName) {
    axios
    .put(`/api/owner/${id}/${newOwnerName}`)
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

  //TANK FUNCTIONALITY

  addTank = (id, newTank) => {
    axios
    .post(`/api/owner/${id}/tankArmory`, {newTank})
    .then(response => {
        this.setState({
          ownerData: response.data
        })
      })
    .catch(err => console.log(err))
}

  deleteTank = (id, tankID) => {
    axios
    .delete(`/api/owner/${id}/tankArmory/${tankID}`)
    .then(response => {
      this.setState({
        ownerData: response.data
      })
    })
  .catch(err => console.log(err))
  }

  render() {
    let {ownerData, currentOwner, newOwnerName} = this.state;
    return (
      <div className="page-wrapper">
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
            onChange={event => this.setState({ newOwnerName: event.target.value })}
            value={newOwnerName}
            />
            <div onClick={() => this.updateOwner(currentOwner, newOwnerName)}>{ownerData[currentOwner].owner}</div>
            <button onClick={() => this.deleteOwner(currentOwner)}>Sever Relationship</button>
          </div>  
        
          <OwnerInfo 
            ownerData={this.state.ownerData}
            currentOwner={this.state.currentOwner}
            addTank={this.addTank}
            deleteTank={this.deleteTank}
          />
        </main>
      </div>
    );
  }
}

export default App;