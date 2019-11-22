import { st } from "springtype/core";
import { tsx } from "springtype/web/vdom";
import { FA } from "st-font-awesome";

import { Button } from "../../dist/button";

st.render(
    <div class="container-fluid">
        <br />
        <Button type='primary' onClick={() => { console.log('clicked') }}>
            <FA icon="plus" /> Primary
        </Button>
        <br />
        <br />
        <Button type='secondary' onClick={() => { console.log('clicked') }}>
            <FA icon="plus" /> Primary
        </Button>
        <br />
        <br />
        <Button type='danger' onClick={() => { console.log('clicked') }}>
            <FA icon="plus" /> Primary
        </Button>
        <br />
        <br />
        <Button type='primary' outline={true} onClick={() => { console.log('clicked') }}>
            <FA icon="plus" /> Primary
        </Button>
        <br />
        <br />
        <Button type='secondary' outline={true} onClick={() => { console.log('clicked') }}>
            <FA icon="plus" /> Primary
        </Button>
        <br />
        <br />
        <Button type='danger' outline={true} onClick={() => { console.log('clicked') }}>
            <FA icon="plus" /> Primary
        </Button>
        <br />
        <br />
        <Button type='link' size="lg" outline={true} onClick={() => { console.log('clicked') }}>
            <FA icon="plus" /> Primary
        </Button>
        <br />
        <br />
        <Button type='warning' size="sm" outline={true} onClick={() => { console.log('clicked') }}>
            <FA icon="plus" /> Primary
        </Button>
        <br />
        <br />
        <Button type='info' size="xs" outline={true} onClick={() => { console.log('clicked') }}>
            <FA icon="plus" /> Primary
        </Button>
        <br />
        <br />
        <Button type='dark' size="block" outline={true} onClick={() => { console.log('clicked') }}>
            <FA icon="plus" /> Primary
        </Button>
        <br />
        <div style={{
            background: '#333',
            padding: 10
        }}>
            <Button type='light' size="block" outline={true} onClick={() => { console.log('clicked') }}>
                <FA icon="plus" /> Primary
            </Button>
        </div>
    </div>
);
