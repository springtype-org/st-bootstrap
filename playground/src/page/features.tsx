import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { Layout } from "../component/layout"

import "./features.css";

export const FeaturesPageRoute = 'features';

@component
export class FeaturesPage extends st.component {

    render() {
        return <Layout>
            <template slot={Layout.SLOT_MAIN}>
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div class="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 class="display-4 font-weight-normal">Punny headline</h1>
                        <p class="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                        <a class="btn btn-outline-secondary" href="#">Coming soon</a>
                    </div>
                    <div class="product-device box-shadow d-none d-md-block"></div>
                    <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
                </div>
                <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">Another headline</h2>
                            <p class="lead">And an even wittier subheading.</p>
                        </div>
                        <div class="bg-light box-shadow mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
                    </div>
                    <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div class="my-3 p-3">
                            <h2 class="display-5">Another headline</h2>
                            <p class="lead">And an even wittier subheading.</p>
                        </div>
                        <div class="bg-dark box-shadow mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
                    </div>
                </div>
            </template>
        </Layout>;
    }
}