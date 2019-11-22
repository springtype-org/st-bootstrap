import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";

export type AlertHeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IAlertHeadingAttrs {
    tag?: AlertHeadingTags;
}

@component
export class AlertHeading extends st.component<IAlertHeadingAttrs> {

    @attr
    tag: AlertHeadingTags = "h4";

    onAfterElCreate() {

        const classes = [...this.elClass, 'alert-heading'];

        this.elClass = classes;
    }

    render() {
        return this.renderChildren();
    }
}