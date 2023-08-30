# Loader

<p>
    <a href="https://www.npmjs.com/package/@js4y/Loader"><img src="https://img.shields.io/badge/dependencies-none-green.svg" alt="none dependencies"></a>
    <a href="https://www.npmjs.com/package/@js4y/Loader"><img src="https://img.shields.io/npm/v/%40js4y%2FLoader" alt="npm"></a>
    <a href="https://www.npmjs.com/package/@js4y/Loader"><img src="https://img.shields.io/bundlephobia/minzip/%40js4y%2FLoader" alt="npm bundle size"></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/%40js4y%2FLoader" alt="license"></a>
</p>

A tiny dependency-free javascript loading spinner component with minimal configuration.

Live Demo: https://bukacekd.github.io/Loader

## Features

- [easy to use](#usage)
- modification of appearance using [css styles](#styling)
- possibility to add custom text
- simple [configuration](#configuration) and [api](#methods)

## Installation

Npm

```bash
npm install @js4y/loader
```

CDN

```bash
<script src="https://unpkg.com/@js4y/loader/dist/index.js"></script>
```

## Usage

Npm

```javascript
import {Loader} from '@js4y/loader';

new Loader(document.body);
```

CDN

```javascript
<script src="https://unpkg.com/@js4y/loader/dist/index.js"></script>

<script>
    new js4y.components.Loader(document.body);
<script>
```

## Configuration

The component offers a set of configuration items. Below is an overview of them.

```javascript
new Loader(element: HTMLElement | string, {
    className?: string,
    content?: string,
    id?: string
});
```

### className

required: `false`, type: `string`

CSS class of component.

```javascript
new Loader(document.body, {
    className: 'my-loader',
});
```

### content

required: `false`, type: `string`

The content that will be displayed.

```javascript
new Loader(document.body, {
    content: 'please wait...',
});
```

### id

required: `false`, type: `string`

CSS Identifier of component.

```javascript
new Loader(document.body, {
    id: 'my-loader',
});
```

## Methods

### create(element, options): Loader

Creates the component, but without rendering it in the page.

```javascript
const loader = Loader.create(document.body);
```

To render the component directly, use the constructor.

```javascript
const loader = new Loader(document.body);
```

### open(delay?: number): Promise

Opens the component immediately or with a delay.

```javascript
dialog.open();
```

### close(delay?: number): Promise

Close the component immediately or with a delay.

```javascript
dialog.close(2000);
```

## Styling

The component contains basic isolated css styles via shadow dom. Nevertheless, the component can be richly decorated using common css rules and three css custom properties.

| CSS Custom properties | Description |
| - | - |
| `--js4y-loader-duration`  | Duration of icon rotation. |
| `--js4y-loader-size`  | Size of the compontent. |
| `--js4y-loader-width`  | Stroke width of the icon. |

If the parent of the component is the `body` element, the component position become [fixed](https://developer.mozilla.org/en-US/docs/Web/CSS/position#values), otherwise it remains [static](https://developer.mozilla.org/en-US/docs/Web/CSS/position#values).

Example of component styling including basic values:

```css
[data-loader] {
    --js4y-loader-duration: 3s;    /* default: 2s */
    --js4y-loader-size:  100px;    /* default: 40px */
    --js4y-loader-width: 20%;      /* default: 10% */

    backgroud-color: white;        /* default: transparent */
    color: green;                  /* default: currentColor */
    flex-direction: row;           /* default: column */
    font-size: 1.5em;              /* default: inherit */
    gap: 3em;                      /* default: 1em */
    position: absolute;            /* default: static */
    transition: opacity .5s;       /* default: opacity .2s */
    stroke: red;                   /* default: currentColor */
}
```

## Browser support

| ![alt chrome](images/chrome.png) | ![alt edge](images/edge.png)  | ![alt firefox](images/firefox.png)  | ![alt opera](images/opera.png) | ![alt safari](images/safari.png) |
| :-: | :-: | :-: | :-: | :-: |
| Chrome 84+ | Edge 84+ | Firefox 75+ | Opera 70+ | Safari 13.1+ |

## License

The project is licensed under [MIT license](https://opensource.org/license/mit/).

## Related

- [Dialog](https://github.com/bukacekd/Dialog) - A tiny dependency-free JavaSript ES6 library built on a dialog element with minimal configuration.
- [lock-scroll](https://github.com/bukacekd/lock-scroll) - A set of methods to lock scrolling within an element or an entire page.