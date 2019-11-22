import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";

export interface IAlertCloseButtonAttrs {
}

@component
export class AlertCloseButton extends st.component<IAlertCloseButtonAttrs> {

    @attr
    tag: string = "button";

    onAfterElCreate() {
        const attrs: any = {
            type: 'button',
            'data-dismiss': 'alert',
            'aria-label': 'Close'
        };
        this.elAttributes = attrs;

        const classes = [...this.elClass, 'close'];

        this.elClass = classes;
    }

    render() {
        return <span aria-hidden="true">&times;</span>
    }
}