import React, {Component} from 'react';
import '../reset.css';
import './TankControls.css'

class TankControls extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         ph: this.props.ownerData[this.props.currentOwner].tankArmory[this.props.tankID].pH,
    //         NH3: this.props.ownerData[this.props.currentOwner].tankArmory[this.props.tankID].NH3, 
    //         temperature: this.props.ownerData[this.props.currentOwner].tankArmory[this.props.tankID].temperature, 
    //         salinity: this.props.ownerData[this.props.currentOwner].tankArmory[this.props.tankID].salinity
    //     }
    // }
    increaseHandler = (property, value) => {
        this.setState({
          [property]: value + 1
        });
      }

      decreaseHandler = (property, value) => {
        this.setState({
          [property]: value - 1
        });
      }
    render() {
        let {ownerData, currentOwner, tankID, deleteTank} = this.props;
        // let {pH, NH3, temperature, salinity} = ownerData[currentOwner].tankArmory[tankID];

        return (
            <div className="flex-container">
                <div className="flex-item">
                    <button onClick={event => this.increaseHandler(event.target.pH, event.target.pH)}>^</button>
                    <span>pH</span>
                    <button onClick={event => this.decreaseHandler(event.target.pH, event.target.value)}>v</button>
                </div>

                <div className="flex-item">
                    <button onClick={event => this.increaseHandler(event.target.NH3, event.target.value)}>^</button>
                    <span>NH3</span>
                    <button onClick={event => this.decreaseHandler(event.target.NH3, event.target.value)}>v</button>
                </div>

                <div className="flex-item">
                    <button onClick={event => this.increaseHandler(event.target.temperature, event.target.value)}>^</button>
                    <span>temp</span>
                    <button onClick={event => this.decreaseHandler(event.target.temperature, event.target.value)}>v</button>
                </div>

                <div className="flex-item">
                    <button onClick={event => this.increaseHandler(event.target.salinity, event.target.value)}>^</button>
                    <span>sal</span>
                    <button onClick={event => this.decreaseHandler(event.target.salinity, event.target.value)}>v</button>
                </div>

                <div className="flex-item">
                    <button 
                    id="destroy"
                    onClick={() => deleteTank(currentOwner, tankID)}
                    >Destroy
                    </button>
                </div>
            </div>
        );
    }
}

export default TankControls;