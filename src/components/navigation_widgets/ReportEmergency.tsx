import * as React from 'react';
import LinkWidgetTemplate from '../template/LinkWidgetTemplate';

interface IProps {

}

function ReportEmergency(props: IProps) {
    return (<>
        <LinkWidgetTemplate
            linkTitle = 'Report Emergency'
            link = "#"
            imageSrc= "https://static.iviva.com/images/Adani_UXP/emergency.svg"
            background='#FF8D8D'
        />
    </>)
}

export default ReportEmergency;