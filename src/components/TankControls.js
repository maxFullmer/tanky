import React, {Component} from 'react';
import '../reset.css';
import './TankControls.css'

class TankControls extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state {

    //     }
    // }
    render() {
        return (
            <div className="flex-container">
                <div className="flex-item">
                    <button>^</button>
                    <span>pH</span>
                    <button>v</button>
                </div>

                <div className="flex-item">
                    <button>^</button>
                    <span>NH3</span>
                    <button>v</button>
                </div>

                <div className="flex-item">
                    <button>^</button>
                    <span>temp</span>
                    <button>v</button>
                </div>

                <div className="flex-item">
                    <button>^</button>
                    <span>sal</span>
                    <button>v</button>
                </div>

                <div className="flex-item">
                    <button id="destroy">Destroy</button>
                </div>
            </div>
        );
    }
}

export default TankControls;