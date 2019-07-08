import React, { Component } from 'react';
import TankControls from './TankControls.js';
import '../reset.css';
import './OwnerInfo.css';
// import axios from 'axios';

class OwnerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tankName: ""
        };
    }

    render() {
        let {ownerData, currentOwner, addTank, deleteTank} = this.props; 
        let mappedTanks = ownerData[currentOwner].tankArmory.map((tank, index) => {
            return <div key={index} className="tanks">
                        <div className="nameAlign">{tank.tankName}</div>
                        <div>Tank id: {tank.tankID}</div>                        
                        <div>pH: {tank.pH}</div>
                        <div>NH3: {tank.NH3}%</div>
                        <div>Temp: {tank.temperature} F</div>
                        <div>Sal: {tank.salinity}ppt</div>
                        <TankControls 
                            ownerData={ownerData} 
                            currentOwner={currentOwner} 
                            tankID={tank.tankID}
                            deleteTank={deleteTank}
                            // pH={ownerData[currentOwner].tankArmory[tank].pH}
                            // NH3={ownerData[currentOwner].tankArmory[tank].NH3}
                            // temperature={tank.temperature}
                            // salinity={tank.salinity}

                        />
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
                        <button onClick={() => addTank(currentOwner, this.state.tankName)}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default OwnerInfo;