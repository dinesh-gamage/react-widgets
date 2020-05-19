import * as React from 'react';
import "./PersonalConsumption.scss";

class PersonalConsumption extends React.Component<{}, {}> {

    render() {

        return (
            <div className={'personal-widget'}>
                <div className="title">
                    <div><span className="calendar"></span> Energy Consumption per person</div>
                    {/* <div>
                        <span className='arrow'></span>
                        <span className="arrow"></span>
                    </div> */}
                </div>
                <div className="body">
                    <div>
                        <div className="user"></div>
                        <h1>0.08 kWh</h1>
                        <p>Floor 14 - Floor 15</p>
                        <p>INR 850</p>
                    </div>
                    <div>
                        <div className="user"></div>
                        <h1>0.08 kWh</h1>
                        <p>Floor 14 - Floor 15</p>
                        <p>INR 850</p>
                    </div>
                    
                </div>
            </div>
        );
    }

}

export default PersonalConsumption;