import * as React from 'react';
import LinkWidgetTemplate from '../template/LinkWidgetTemplate';

interface IProps {

}

function QRBadge(props: IProps) {
    return (<>
        <LinkWidgetTemplate
            linkTitle = 'My QR Badge'
            link = "#"
            imageSrc= "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
        />
    </>)
}

export default QRBadge;