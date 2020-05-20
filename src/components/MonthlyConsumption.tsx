import * as React from 'react';
import * as Recharts from 'recharts';

import "./MonthlyConsumption.scss";

class CarbonFootPrint extends React.Component<{}, {}> {

    render() {

        const data = [
            {
                name: 'Jan', HVAC: 12, Lighting: 0, PlugPoints: 23, EmergencyLightning: 0, Elevators: 17
            },
            {
                name: 'Feb', HVAC: 0, Lighting: 0, PlugPoints: 25, EmergencyLightning: 20, Elevators: 18
            },
            {
                name: 'Mar', HVAC: 10, Lighting: 12, PlugPoints: 0, EmergencyLightning: 28, Elevators: 0
            },
            {
                name: 'Apr', HVAC: 10, Lighting: 12, PlugPoints: 0, EmergencyLightning: 28, Elevators: 0
            },
            {
                name: 'May', HVAC: 0, Lighting: 0, PlugPoints: 20, EmergencyLightning: 18, Elevators: 27
            },
            {
                name: 'Jun', HVAC: 0, Lighting: 0, PlugPoints: 0, EmergencyLightning: 0, Elevators: 0
            },
            {
                name: 'Jul', HVAC: 0, Lighting: 0, PlugPoints: 0, EmergencyLightning: 0, Elevators: 0
            },
            {
                name: 'Aug', HVAC: 0, Lighting: 0, PlugPoints: 0, EmergencyLightning: 0, Elevators: 0
            },
            {
                name: 'Sep', HVAC: 0, Lighting: 0, PlugPoints: 0, EmergencyLightning: 0, Elevators: 0
            },
            {
                name: 'Oct', HVAC: 0, Lighting: 0, PlugPoints: 0, EmergencyLightning: 0, Elevators: 0
            },
            {
                name: 'Nov', HVAC: 0, Lighting: 0, PlugPoints: 0, EmergencyLightning: 0, Elevators: 0
            },
            {
                name: 'Dec', HVAC: 0, Lighting: 0, PlugPoints: 0, EmergencyLightning: 0, Elevators: 0
            },
        ];

        return (
            <div className={'monthly-widget'}>
                <div className="title">
                    <div><span className="calendar"></span> Monthly Consumption</div>
                    <div>
                        <span className='button active'>Daily</span>
                        <span className="button">Week</span>
                        <span className="button">Monthly</span>
                    </div>
                </div>
                <div className="body">

                    <div className="content stat">

                        <div className="stat-tile">
                            <div className="c title">Electrical</div>
                            <div className="c body">
                                <div className="icon electrical-icon"></div>
                                <div className="det">
                                    <h1>10 kWh </h1>
                                    <p>INR 10 lakhs</p>
                                </div>
                            </div>
                        </div>

                        <div className="stat-tile">
                            <div className="c title">GAS</div>
                            <div className="c body">
                                <div className="icon gas-icon"></div>
                                <div className="det">
                                    <h1>10 kWh </h1>
                                    <p>INR 10 lakhs</p>
                                </div>
                            </div>
                        </div>

                        <div className="stat-tile">
                            <div className="c title">water</div>
                            <div className="c body">
                                <div className="icon water-off-icon"></div>
                                <div className="det">
                                    <h1>2000 ltr </h1>
                                    <p>INR 10 lakhs</p>
                                </div>
                            </div>
                        </div>

                        <div className="stat-tile">
                            <div className="c title">waste</div>
                            <div className="c body">
                                <div className="icon waste-icon"></div>
                                <div className="det">
                                    <h1>05 tonnes </h1>
                                    <p>INR 10 lakhs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content stat">

                        <div className="stat-tile">
                            <div className="c title">Select a metric</div>
                            <div className="c body tile-3">
                                <select name="" id="">
                                    <option value="">Electrical</option>
                                    <option value="">Water</option>
                                    <option value="">Gas</option>
                                    <option value="">Waste</option>
                                </select>

                                <div className="radio">
                                    <input type="radio" name="aa" id="a" value="Working Hours" />
                                    <label htmlFor="a"> Working Hours </label>
                                    <input type="radio" name="aa" id="b" value="Non Working" />
                                    <label htmlFor="b"> Non Working  </label>

                                </div>
                            </div>
                        </div>

                        <div className="stat-tile">
                            <div className="c title">Feb 2020</div>
                            <div className="c body tile-2">
                                <div className="p left">
                                    <div className="lb">
                                        3 kWh
                                    </div>
                                    <p>INR 10 lakhs</p>
                                </div>
                                <div className="p right">
                                    <div className="lb">
                                        5 kWh
                                    </div>
                                    <p>INR 10 lakhs</p>
                                </div>
                            </div>
                        </div>

                        <div className="stat-tile">
                            <div className="c title">Jan 2020</div>
                            <div className="c body tile-2">
                                <div className="p left">
                                    <div className="lb">
                                        5 kWh
                                    </div>
                                    <p>INR 10 lakhs</p>
                                </div>
                                <div className="p right">
                                    <div className="lb">
                                        3 kWh
                                    </div>
                                    <p>INR 10 lakhs</p>
                                </div>
                            </div>
                        </div>

                        <div className="stat-tile">
                            <div className="c title">Dec 2019</div>
                            <div className="c body tile-2">
                                <div className="p left">
                                    <div className="lb">
                                        7 kWh
                                    </div>
                                    <p>INR 10 lakhs</p>
                                </div>
                                <div className="p right">
                                    <div className="lb">
                                        3 kWh
                                    </div>
                                    <p>INR 10 lakhs</p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="content chart">

                        <Recharts.ResponsiveContainer>
                            <Recharts.BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <Recharts.CartesianGrid strokeDasharray="3 3" />
                                <Recharts.XAxis dataKey="name" />
                                <Recharts.YAxis />
                                <Recharts.Tooltip />
                                <Recharts.Legend />
                                <Recharts.Bar dataKey="HVAC" stackId="a" fill="#433dda" width={2} />
                                <Recharts.Bar dataKey="Lighting" stackId="a" fill="#36cc69" width={2} />
                                <Recharts.Bar dataKey="PlugPoints" stackId="a" fill="#9c58df" width={2} />
                                <Recharts.Bar dataKey="EmergencyLightning" stackId="a" fill="#ff9449" width={2} />
                                <Recharts.Bar dataKey="Elevators" stackId="a" fill="#fa74b3" width={2} />
                            </Recharts.BarChart>
                        </Recharts.ResponsiveContainer>
                    </div>

                </div>
            </div>
        );
    }

}

export default CarbonFootPrint;