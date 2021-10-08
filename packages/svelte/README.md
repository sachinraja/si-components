# @si-components/svelte

[simple-icons](https://github.com/simple-icons/simple-icons) component for Svelte

## Installation

```shell
npm i @si-components/svelte simple-icons
```

`simple-icons` must be installed as a peer dependency.

## Usage

<!-- prettier-ignore -->
```html
<script>
  import SIIcon from '@si-components/svelte'
  // import icon from simple-icons
  import svelteIcon from 'simple-icons/icons/svelte'
</script>

<!-- pass icon into component -->
<SIIcon icon={svelteIcon} />

<!-- pass width, height, and color -->
<SIIcon icon={svelteIcon} width={100} height={100} color="#{svelteIcon.hex}" />

<!-- extra attributes are passed to svg -->
<SIIcon icon={svelteIcon} svgProps={{ stroke: '#00ff00', 'stroke-width': 2 }} />
```
