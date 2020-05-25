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

import LinkWidgetTemplate from "./components/template/LinkWidgetTemplate";

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

interface IWidgetPropConfig {
    name: string,
    type: string,
    label: string
    attr?: {[key:string]: any}
}

interface IWidgetConfigs {
    layout?: ILayout
    container?: IContainer,
    props?: IWidgetPropConfig[]
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

window.registerWidget({ "name": "MeetingRoomBookingWidget", "widget": MeetingRoom, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
window.registerWidget({ "name": "CreateRequestWidget", "widget": CreateRequest, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
// window.registerWidget({ "name": "FacilityBookingWidget", "widget": FacilityBooking, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
// window.registerWidget({ "name": "DeskBookingWidget", "widget": DeskBooking, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
// window.registerWidget({ "name": "QRWidget", "widget": QRBadge, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
// window.registerWidget({ "name": "ReportEmergencyWidget", "widget": ReportEmergency, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
// window.registerWidget({ "name": "RegisterVisitorsWidget", "widget": RegisterVisitor, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });

window.registerWidget({ "name": "VisitorWidget", "widget": VisitorWidget });
window.registerWidget({ "name": "ParkingWidget", "widget": ParkingWidget });
window.registerWidget({ "name": "PersonalConsumptionWidget", "widget": PersonalConsumption });
window.registerWidget({ "name": "CarbonFootPrintWidget", "widget": CarbonFootPrint });
window.registerWidget({ "name": "FloorWiseConsumptionWidget", "widget": FloorWiseConsumption });
window.registerWidget({ "name": "MonthlyConsumptionWidget", "widget": MonthlyConsumption });

window.registerWidget({
    "name": "LinkWidgetTemplate",
    "widget": LinkWidgetTemplate,
    "configs": {
        "props": [
            { "name": "link", "label": "Link", "type": "string", "attr": {"required": true} },
            { "name": "imageSrc", "type": "string",  "label": "Image Src", "attr": {"required": true }},
            { "name": "linkTitle", "type": "string", "label": "Title", "attr": {"required": true }},
            { "name": "background", "type": "string", "label": "Background Color", "attr": {"required": false }}
        ],
        "container": {
            "background": "transparent"
        }
    }
})


class Layout extends React.Component<{}, {}> {

    componentWillMount() {
    }


    render() {

        return (<>
            <div className="content">
                <LinkWidgetTemplate
                    linkTitle='Meeting Room Booking'
                    link="#"
                    imageSrc="https://static.iviva.com/images/Adani_UXP/condeco.png"
                />
            </div>
        </>);
    }
}

// // render dom
// ReactDOM.render(
//     <Layout />,
//     document.getElementById("root")
// );