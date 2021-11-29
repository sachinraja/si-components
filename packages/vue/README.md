# @si-components/vue

**Vue 3** component for [simple-icons](https://github.com/simple-icons/simple-icons)

## Installation

```shell
npm install @si-components/vue simple-icons
```

`simple-icons` must be installed as a peer dependency.

## Usage

```html
<template>
  <!-- pass icon into component -->
  <SIIcon :icon="siVuedotjs" />
  <!-- extra attributes are passed to svg -->
  <SIIcon
    :icon="siVuedotjs"
    width="100"
    height="100"
    :color="'#' + siVuedotjs.hex"
  />
</template>

<script>
  import SIIcon from '@si-components/vue'
  // import icon from simple-icons
  import { siVuedotjs } from 'simple-icons/icons'

  export default {
    name: 'Component',
    components: {
      SIIcon,
    },
    data() {
      return {
        siVuedotjs,
      }
    },
  }
</script>
```
