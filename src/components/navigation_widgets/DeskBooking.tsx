import * as React from 'react';
import LinkWidgetTemplate from '../template/LinkWidgetTemplate';

interface IProps {

}

function DeskBooking(props: IProps) {
    return (<>
        <LinkWidgetTemplate
            linkTitle = 'Book a Desk'
            link = "#"
            imageSrc= "https://static.iviva.com/images/Adani_UXP/condeco.png"
        />
    </>)
}

export default DeskBooking;