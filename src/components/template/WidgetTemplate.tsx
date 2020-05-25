import * as React from 'react';
import './WidgetTemplate.scss'

interface IProps {
    classes?: string,
    title?: any,
    toolbarContent?: any,
    content: any,
    footer?: any
}


function WidgetTemplate(props: IProps) {

    return (<>
        <div className={`widget-block flex-row-center ${props.classes? props.classes : ""} `}>

            <div className="wb-header ">

                <div className="wbh-title">
                    {props.title}
                </div>

                <div className="whb-toolbar">
                    {
                        props.toolbarContent !== null ?
                            props.toolbarContent
                            :
                            ""
                    }
                
                </div>

            </div>


            <div className="wb-body">
                {props.content}
            </div>


            {
                props.footer !== null ?
                    <div className="wb-footer">
                        {props.footer}
                    </div>
                    :
                    ""
            }

        </div>
    </>);
}

export default WidgetTemplate;