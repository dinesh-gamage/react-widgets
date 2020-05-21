import * as React from 'react';
import LinkWidgetTemplate from '../template/LinkWidgetTemplate';

interface IProps {

}

function FacilityBooking(props: IProps) {
    return (<>
        <LinkWidgetTemplate
            linkTitle = 'Facility Booking'
            link = "#"
            imageSrc= "https://static.iviva.com/images/Adani_UXP/e-fecility.svg"
        />
    </>)
}

export default FacilityBooking;