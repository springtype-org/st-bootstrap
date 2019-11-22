import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";

export type ButtonTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
export type ButtonSizes = 'sm' | 'lg' | 'xs' | 'block';

export interface IButtonAttrs {
    href?: string;
    type?: ButtonTypes;
    size?: ButtonSizes;
    outline?: boolean;
    active?: boolean;
}

@component
export class Button extends st.component<IButtonAttrs> {

    tag: "button";

    class: ["btn"];

    @attr
    size?: ButtonSizes;

    @attr
    outline?: boolean;

    @attr
    active?: boolean;

    @attr
    disabled?: boolean;

    @attr
    toggled?: boolean;

    @attr
    href?: string;

    @attr
    type: ButtonTypes = 'primary';

    onAfterElCreate() {

        const attrs: any = {
            role: 'button',
            type: 'button',
            autocomplete: "off",
            'aria-pressed': false
        };

        if (this.href) {
            attrs.href = this.href;
        }

        if (this.disabled) {
            attrs.disabled = true;
        }

        if (this.toggled) {
            attrs['data-toggle'] = "button";
            attrs['aria-pressed'] = true;
        }

        const classes = [...this.elClass, 'btn', this.outline ? `btn-outline-${this.type}` : `btn-${this.type}`];

        if (this.size) {
            classes.push(`btn-${this.size}`);
        }

        if (this.active) {
            classes.push('active');
        }

        this.elClass = classes;
        this.elAttributes = attrs;
    }

    render() {
        return this.renderChildren();
    }

    toggle() {
        $(this.el).button('toggle');
    }

    dispose() {
        $(this.el).button('dispose');
    }
}