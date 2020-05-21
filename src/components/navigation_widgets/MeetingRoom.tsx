import * as React from 'react';
import LinkWidgetTemplate from '../template/LinkWidgetTemplate';

interface IProps {

}

function MeetingRoom(props: IProps) {
    return (<>
        <LinkWidgetTemplate
            linkTitle = 'Meeting Room Booking'
            link = "#"
            imageSrc= "https://static.iviva.com/images/Adani_UXP/condeco.png"
        />
    </>)
}

export default MeetingRoom;