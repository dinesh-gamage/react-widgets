import * as React from 'react';
import LinkWidgetTemplate from '../template/LinkWidgetTemplate';

interface IProps {

}

function RegisterVisitor(props: IProps) {
    return (<>
        <LinkWidgetTemplate
            linkTitle = 'Register Visitor'
            link = "#"
            imageSrc= "https://static.iviva.com/images/Adani_UXP/reg_visit.svg"
        />
    </>)
}

export default RegisterVisitor;