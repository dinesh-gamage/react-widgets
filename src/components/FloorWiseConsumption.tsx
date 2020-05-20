import * as React from 'react';
import { Line, Bar } from 'react-chartjs-2';


import "./FloorWiseConsumption.scss";

class FloorWiseConsumption extends React.Component<{}, {}> {

    render() {


        const data2 = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Min',
                    backgroundColor: '#7cc17a',
                    borderColor: '#7cc17a',
                    borderWidth: 1,
                    hoverBackgroundColor: '#7cc17a',
                    hoverBorderColor: '#7cc17a',
                    data: [8, 0, -9, 0, -12, -5, 0, -4, -7, 0, -9, 0]
                }, {
                    label: 'Max',
                    backgroundColor: '#f25b5b',
                    borderColor: '#f25b5b',
                    borderWidth: 1,
                    hoverBackgroundColor: '#f25b5b',
                    hoverBorderColor: '#f25b5b',
                    data: [0, 7, 0, 10, 0, 0, 7, 0, 0, 7, 0, 5]
                }
            ]
        };




        return (
            <div className={'floor-wise-widget'}>
                <div className="title">
                    <div><span className="calendar"></span> Floorwise Consumption </div>
                    <div>
                        <span className='button active'>Baseline</span>
                        <span className="button">Heatmap</span>
                    </div>
                </div>
                <div className="body">

                    <div className="toolbar">
                        <div className="baseline-diff">View Baseline Difference</div>
                        <div>
                            <span >Min</span>
                            <span >Max</span>
                        </div>
                    </div>

                    <div className="chart-container">
                        <div className="chart chart-01">
                            <Bar
                                data={data2}
                                options={{
                                    maintainAspectRatio: false
                                }}
                            />
                        </div>
                        <div className="chart chart-02">
                            <Bar
                                data={data2}
                                options={{
                                    maintainAspectRatio: false
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default FloorWiseConsumption;