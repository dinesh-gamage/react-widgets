import * as React from 'react';
import "./Parking.scss";

class VisitorWidget extends React.Component<{}, {}> {

    render() {

        return (
            <div className={'parking-widget'}>
                <div className="title">
                    <div><span className="calendar"></span> Parking</div>
                    <div>
                        <span className='arrow'></span>
                        <span className="arrow"></span>
                    </div>
                </div>
                <div className="body">
                    <div>
                        <span className="user"></span>
                    </div>
                    <div>
                        <h1>30</h1>
                        <p>KWH</p>
                    </div>
                    <div className="middle">
                        <h4 >INR 1000</h4>
                    </div>
                    <div className="bottom">
                        <span></span>&nbsp; 0.5% Lesser energy consumed
                    </div>
                </div>
            </div>
        );
    }

}

export default VisitorWidget;