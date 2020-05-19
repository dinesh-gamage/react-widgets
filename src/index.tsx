import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";

import VisitorWidget from "./components/Visitor";
import ParkingWidget from './components/Parking';
import PersonalConsumption from "./components/PersonalConsumption";
import CarbonFootPrint from './components/CarbonFootPrint';
import FloorWiseConsumption from "./components/FloorWiseConsumption";

// window interface
interface IWidgetConfigs {
    w?: number,
    h?: number,
    isDraggable?: boolean,
    isResizable?: boolean,
    maxH?: number,
    maxW?: number,
    minH?: number,
    minW?: number
}

interface IWidgetObject {
    name: string,
    widget: any,
    configs?: IWidgetConfigs
}

declare global {
    interface Window {
        registerWidget(config: IWidgetObject): void
    }
}

window.registerWidget({ "name":"VisitorWidget", "widget": VisitorWidget });
window.registerWidget({ "name":"ParkingWidget", "widget": ParkingWidget });
window.registerWidget({ "name":"PersonalConsumption", "widget": PersonalConsumption });
window.registerWidget({ "name":"CarbonFootPrintWidget", "widget": CarbonFootPrint });
// window.registerWidget({ "name":"FloorWiseConsumptionWidget", "widget": FloorWiseConsumption });

class Layout extends React.Component<{}, {}> {

    componentWillMount() {
    }


    render() {

        return (<>
            <div className="content">
                {/* <FloorWiseConsumption /> */}
                <VisitorWidget />
                <ParkingWidget />
                <PersonalConsumption />
                <CarbonFootPrint />
            </div>
        </>);
    }
}

// // render dom
// ReactDOM.render(
//     <Layout />,
//     document.getElementById("root")
// );