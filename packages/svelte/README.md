# @si-components/svelte

[simple-icons](https://github.com/simple-icons/simple-icons) component for Svelte

## Installation

```shell
npm i @si-components/svelte simple-icons
```

`simple-icons` must be installed as a peer dependency. You must also [preprocess your svelte files](https://github.com/sveltejs/svelte-preprocess#what-is-it) because this package uses `<script lang="ts">`.

## Usage

```html
<script>
  import SIIcon from '@si-components/svelte'
  // import icon from simple-icons
  import svelteIcon from 'simple-icons/icons/svelte'
</script>

<!-- pass icon into component -->
<SIIcon icon={svelteIcon}></SIIcon>

<!-- extra attributes are passed to svg -->
<SIIcon icon={svelteIcon} svgProps={{ width: 100, height: 100, color: `#${svelteIcon.hex}` }}></SIIcon>
```