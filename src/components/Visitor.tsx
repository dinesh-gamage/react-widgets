import * as React from 'react';
import "./Visitor.scss";

class VisitorWidget extends React.Component<{}, {}> {

    render() {

        return (
            <div className={'visitor-widget'}>
                <div className="title">Hello, Haran <span className="calendar"></span></div>
                <div className="body">
                    <p>Your Visitor is Here</p>
                    <p>Kishore Kumar</p>
                    <p>for the 10.00 am meeting</p>

                    <div className="bottom">
                        <div className="heat">37.5 &#8451; </div>
                        <div>snooze</div>
                        <div className="conf">acknowledge</div>
                    </div>
                    <p className="small">POWERED BY LUCY</p>
                </div>
            </div>
        );
    }

}

export default VisitorWidget;