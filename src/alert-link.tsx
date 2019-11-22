import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";

export interface IAlertLinkAttrs {
    href?: string;
    target?: string;
}

@component
export class AlertLink extends st.component<IAlertLinkAttrs> {

    tag: string = "a";

    @attr
    href: string = '#';

    @attr
    target: string = '_blank';

    onAfterElCreate() {

        const attrs: any = {};

        if (this.href) {
            attrs.href = this.href;
        }

        if (this.target) {
            attrs.target = this.target;
        }
        this.elAttributes = attrs;

        const classes = [...this.elClass, 'alert-link'];

        this.elClass = classes;
    }

    render() {
        return this.renderChildren();
    }
}