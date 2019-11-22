import * as $ from "jquery";
(window as any).$ = $;
import "bootstrap";

import { st } from "springtype/core";
import { tsx } from "springtype/web/vdom";
import { FA } from "st-font-awesome";

import { Button } from "../../dist/button";
import { Alert } from "../../dist/alert";
import { AlertLink } from "../../dist/alert-link";
import { AlertHeading } from "../../dist/alert-heading";
import { AlertCloseButton } from "../../dist/alert-close-button";
import { Badge } from "../../dist/badge";

st.render(
    <div class="container-fluid">
        <Alert type="secondary" dismissable={true} fade={true} show={true}>
            <AlertHeading>Nice</AlertHeading>
            A simple secondary alert with <AlertLink href="https://www.springtype.org">an example link</AlertLink>. Give it a click if you like.   
            <AlertCloseButton />
        </Alert>

        <Badge tag="a" href="https://www.springtype.org" type="info" pill={true}>SpringType</Badge>

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
