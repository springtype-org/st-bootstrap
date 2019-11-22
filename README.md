<h1 align="center">Bootstrap 4 for SpringType</h2>

> Easy to use, flexible, versatile and high performant components to build websites and PWA's
> Based on the official Bootstrap implementation: getbootstrap.com

<h2 align="center">Setup</h2>

    yarn add st-bootstrap bootstrap jquery

- Bootstrap 4 for SCSS and JS support
- jQuery for JS support
- Optionally: `yarn add st-font-awesome` for Font Awesome 5 support

<h2 align="center">Use</h2>

To use Bootstrap 4 components, just include the components you need:

```ts
// import jQuery, Bootstrap and wire it up
import * as $ from "jquery";
(window as any).$ = $;
import "bootstrap";

import { st } from 'springtype';
import { FA } from 'st-font-awesome';
import { Button } from 'st-bootstrap';

st.render(
  <Button type='primary' onClick={() => { console.log('clicked') }}>
    <FA icon="plus" /> Primary
  </Button>
);
```

...which will result in:

<img src="result.png" height="150px" />

<h2 align="center">Roadmap</h2>

The following components are already implemented:

- [ ] Grid
- [ ] Typography
- [ ] Code
- [ ] Images
- [ ] Tables
- [ ] Figures
- [x] Alerts
- [ ] Breadcrumb
- [x] Button
- [ ] Button group
- [ ] Card
- [ ] Carousel
- [ ] Collapse
- [ ] Dropdowns
- [ ] Forms
- [ ] Input group
- [ ] Jumbotron
- [ ] List group
- [ ] Media object
- [ ] Modal
- [ ] Navs
- [ ] Navbar
- [ ] Pagination
- [ ] Popovers
- [ ] Progress
- [ ] Scrollspy
- [ ] Spinners
- [ ] Toasts
- [ ] Tooltips

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/454817?v=4&s=150">
        </br>
        <a href="https://github.com/kyr0">Aron Homberg</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/12079044?s=150&v=4">
        </br>
        <a href="https://github.com/mansi1">Michael Mannseicher</a>
      </td>
    </tr>
  <tbody>
</table>

<h2 align="center">Contributing</h2>

Please help out to make this project even better and see your name added to the list of our  
[CONTRIBUTORS.md](./CONTRIBUTORS.md) :tada: