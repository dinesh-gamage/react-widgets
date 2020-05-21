import * as React from 'react';
import WidgetTemplate from './WidgetTemplate';

import "./LinkWidgetTemplate.scss";

interface IProps {
    link: string,
    imageSrc: string,
    linkTitle: string,
    background?: string
}

function LinkWidgetTemplate(props: IProps) {

    let styles:any = {}
    if(props.background) {
        styles.background = props.background
    }

    let content = <>
        <a href={props.link} target="_blank" className="link-widget">
            <div className={`lw-img-container `} style={styles}>
                <img src={props.imageSrc} alt="link-icon" />
            </div>

            <p className="lw-title">{props.linkTitle}</p>
        </a>

    </>;

    return (
        <WidgetTemplate
            content={content}
        />
    );
}

export default LinkWidgetTemplate;
