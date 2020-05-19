import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import "./FloorWiseConsumption.scss";

class FloorWiseConsumption extends React.Component<{}, {}> {

    render() {

        const options = {
            title: {
                text: 'My chart'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                crosshair: true
            },
            yAxis: {
                title: {
                    text: 'Values'
                }
            },
            series: [{
                type: "column",
                data: [10, 7, -9, 10, -12, -5, 7, -4, -7, 7, -9, 5]

            }]
        }



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
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={options}
                            />
                        </div>
                        <div className="chart chart-02">
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={options}
                            />
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default FloorWiseConsumption;