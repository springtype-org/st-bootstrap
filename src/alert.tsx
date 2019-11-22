import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";

export type AlertTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export interface IAlertAttrs {
    type?: AlertTypes;
    dismissable?: boolean;
    show?: boolean;
    fade?: boolean;
}

@component
export class Alert extends st.component<IAlertAttrs> {

    tag: string = "div";

    @attr
    type: AlertTypes = 'primary';

    @attr
    dismissable: boolean;

    @attr
    show: boolean;

    @attr
    fade: boolean;

    onAfterElCreate() {

        const attrs: any = {
            role: 'alert'
        };

        const classes = [...this.elClass, 'alert', `alert-${this.type}`];

        if (this.fade) {
            classes.push('fade');
        }

        if (this.show) {
            classes.push('show');
        }

        if (this.dismissable) {
            classes.push('alert-dismissable');
        }
        this.elClass = classes;
        this.elAttributes = attrs;
    }

    render() {
        return this.renderChildren();
    }

    onAfterInitialRender() {
        $(this.el).alert();
    }

    close() {
        $(this.el).alert('close');
    }

    dispose() {
        $(this.el).alert('dispose');
    }
}