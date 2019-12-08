import { st } from "springtype/core";
export type BootstrapComponent = 'tooltip';

export const setupBootstrapComponent = (...names: Array<BootstrapComponent>) => {

    for (let name of names) {

        switch (name) {
            case 'tooltip':
                st.renderer.setIgnoredAttributes([
                    'data-original-title'
                ]);
                break;
        }
    }
}