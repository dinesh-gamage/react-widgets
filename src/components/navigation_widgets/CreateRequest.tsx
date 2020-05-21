import * as React from 'react';
import LinkWidgetTemplate from '../template/LinkWidgetTemplate';

interface IProps {

}

function CreateRequest(props: IProps) {
    return (<>
        <LinkWidgetTemplate
            linkTitle = 'Create Request'
            link = "#"
            imageSrc= "https://static.iviva.com/images/Adani_UXP/create-Request.svg"
        />
    </>)
}

export default CreateRequest;