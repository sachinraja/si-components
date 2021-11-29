# @si-components/svelte

Svelte component for [simple-icons](https://github.com/simple-icons/simple-icons)

## Installation

```shell
npm install @si-components/svelte simple-icons
```

`simple-icons` must be installed as a peer dependency.

## Usage

<!-- prettier-ignore -->
```svelte
<script>
  import SIIcon from '@si-components/svelte'
  // import icon from simple-icons
  import {siSvelte} from 'simple-icons/icons'
</script>

<!-- pass icon into component -->
<SIIcon icon={siSvelte} />

<!-- pass width, height, and color -->
<SIIcon icon={siSvelte} width={100} height={100} color="#{siSvelte.hex}" />

<!-- extra attributes are passed to svg -->
<SIIcon icon={siSvelte} svgProps={{ stroke: '#00ff00', 'stroke-width': 2 }} />
```
