import * as React from 'react';
import * as Recharts from 'recharts';

import "./CarbonFootPrint.scss";

class CarbonFootPrint extends React.Component<{}, {}> {

    render() {

        const data = [
            {
                name: '2017', uv: 10
            },
            {
                name: '2018', uv: 12
            },
            {
                name: '2019', uv: 9
            },
            {
                name: '2020', uv: 11
            }
        ];

        return (
            <div className={'carbon-widget'}>
                <div className="title">
                    <div><span className="calendar"></span> Carbon FootPrint</div>
                    <div>
                        <span className='button active'>Daily</span>
                        <span className="button">Week</span>
                        <span className="button">Monthly</span>
                    </div>
                </div>
                <div className="body">

                    <div className="stat">

                        <div className="stat-tile">
                            <div className="icon energy"></div>
                            <div>
                                <h1>10 kWh </h1>
                                <p>Power Consumed</p>
                            </div>
                        </div>

                        <div className="stat-tile">
                            <div className="icon cloud"></div>
                            <div>
                                <h1>11 tonnes </h1>
                                <p>CO2 Emitted</p>
                            </div>
                        </div>

                        <div className="stat-tile">
                            <div className="icon tree"></div>
                            <div>
                                <h1>514 Trees </h1>
                                <p>Trees to offset CO2</p>
                            </div>
                        </div>

                    </div>

                    <div className="chart">

                        <Recharts.ResponsiveContainer>
                            <Recharts.AreaChart
                                data={data}
                                margin={{
                                    top: 10, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <Recharts.CartesianGrid strokeDasharray="3 3" />
                                <Recharts.XAxis dataKey="name" />
                                <Recharts.YAxis />
                                <Recharts.Tooltip />
                                <Recharts.Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                            </Recharts.AreaChart>
                        </Recharts.ResponsiveContainer>
                    </div>

                </div>
            </div>
        );
    }

}

export default CarbonFootPrint;