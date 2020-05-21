import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";

import VisitorWidget from "./components/Visitor";
import ParkingWidget from './components/Parking';
import PersonalConsumption from "./components/PersonalConsumption";
import CarbonFootPrint from './components/CarbonFootPrint';
import FloorWiseConsumption from "./components/FloorWiseConsumption";
import MonthlyConsumption from './components/MonthlyConsumption';
import MeetingRoom from './components/navigation_widgets/MeetingRoom';
import CreateRequest from "./components/navigation_widgets/CreateRequest";
import FacilityBooking from "./components/navigation_widgets/Facility";
import DeskBooking from "./components/navigation_widgets/DeskBooking";
import QRBadge from "./components/navigation_widgets/QRBadge";
import ReportEmergency from "./components/navigation_widgets/ReportEmergency";
import RegisterVisitor from "./components/navigation_widgets/RegisterVisitor";

// window interface
interface ILayout {
    w?: number,
    h?: number,
    isDraggable?: boolean,
    isResizable?: boolean,
    maxH?: number,
    maxW?: number,
    minH?: number,
    minW?: number,
    static?: boolean
}

interface IContainer {
    background?: string
}
interface IWidgetConfigs {
    layout?: ILayout
    container?: IContainer
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

window.registerWidget({ "name": "MeetingRoomBookingWidget", "widget": MeetingRoom, configs:{layout:{w:2, h: 6, isResizable:false}, container:{background: "transparent"}} });
window.registerWidget({ "name": "CreateRequestWidget", "widget": CreateRequest, configs:{layout:{w:2, h: 6, isResizable:false},container:{background: "transparent"}} });
window.registerWidget({ "name": "FacilityBookingWidget", "widget": FacilityBooking, configs:{layout:{w:2, h: 6, isResizable:false},container:{background: "transparent"}} });
window.registerWidget({ "name": "DeskBookingWidget", "widget": DeskBooking, configs:{layout:{w:2, h: 6, isResizable:false},container:{background: "transparent"}} });
window.registerWidget({ "name": "QRWidget", "widget": QRBadge, configs:{layout:{w:2, h: 6, isResizable:false},container:{background: "transparent"}} });
window.registerWidget({ "name": "ReportEmergencyWidget", "widget": ReportEmergency, configs:{layout:{w:2, h: 6, isResizable:false},container:{background: "transparent"}} });
window.registerWidget({ "name": "RegisterVisitorsWidget", "widget": RegisterVisitor, configs:{layout:{w:2, h: 6, isResizable:false},container:{background: "transparent"}} });

window.registerWidget({ "name": "VisitorWidget", "widget": VisitorWidget });
window.registerWidget({ "name": "ParkingWidget", "widget": ParkingWidget });
window.registerWidget({ "name": "PersonalConsumptionWidget", "widget": PersonalConsumption });
window.registerWidget({ "name": "CarbonFootPrintWidget", "widget": CarbonFootPrint });
window.registerWidget({ "name": "FloorWiseConsumptionWidget", "widget": FloorWiseConsumption });
window.registerWidget({ "name": "MonthlyConsumptionWidget", "widget": MonthlyConsumption });


class Layout extends React.Component<{}, {}> {

    componentWillMount() {
    }


    render() {

        return (<>
            <div className="content">
                <MeetingRoom />
                <CreateRequest />
                <FacilityBooking />
                <DeskBooking />
                <QRBadge />
                <ReportEmergency />
                <RegisterVisitor />
            </div>
        </>);
    }
}

// // render dom
// ReactDOM.render(
//     <Layout />,
//     document.getElementById("root")
// );