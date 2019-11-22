import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";

export type BadgeTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export interface IBadgeAttrs {
    type?: BadgeTypes;
    pill?: boolean;
    href?: string;
    target?: string;
}

@component
export class Badge extends st.component<IBadgeAttrs> {

    @attr
    tag: 'span' | 'a' = 'span';

    @attr
    type: BadgeTypes = 'primary';

    @attr
    pill: boolean;

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

        const classes = [...this.elClass, 'badge', `badge-${this.type}`];

        if (this.pill) {
            classes.push('badge-pill');
        }

        this.elClass = classes;
    }

    render() {
        return this.renderChildren();
    }
}