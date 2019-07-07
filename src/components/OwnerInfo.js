import React, { Component } from 'react';
import TankControls from './TankControls.js';
// import './reset.css';
import '../reset.css';
import './OwnerInfo.css';
import axios from 'axios';

class OwnerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tankName: ""
        };
    }

    addTank() {
        const newTank = {
            tankName: this.state.tankName
        }
        axios
        .post('/api/owner/tankArmory', newTank)
        .then(response => {
            this.setState({
              ownerData: response.data
            })
          })
        .catch(err => console.log(err))
      }

    render() {
        let {ownerData, currentOwner} = this.props;
        let mappedTanks = ownerData[currentOwner].tankArmory.map((tank, index) => {
            return <div key={index} className="tanks">
                        <div>Tank id: {tank.tankID}</div>                        
                        <div>{tank.tankName}</div>
                        <div>pH: {tank.pH}</div>
                        <div>NH3: {tank.NH3}</div>
                        <div>Temp: {tank.temperature}</div>
                        <div>Sal: {tank.salinity}</div>
                        <TankControls ownerData={ownerData} currentOwner={currentOwner}/>
                    </div>
        })
        return (
            <div>
                <div className="ownerCard">

                    {mappedTanks}
                    <div className="newTank">
                        <input 
                        tpye="text"
                        placeholder="Enter Tank Name"
                        onChange={event => this.setState({ tankName: event.target.value })}
                        value={this.state.tankName}
                        />
                        <button onClick={() => this.addTank()}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default OwnerInfo;