# @si-components/vue

[simple-icons](https://github.com/simple-icons/simple-icons) component for **Vue 3**

## Installation

```shell
npm i @si-components/vue simple-icons
```

`simple-icons` must be installed as a peer dependency.

## Usage

```html
<template>
  <!-- pass icon into component -->
  <SIIcon :icon="vueIcon" />
  <!-- extra attributes are passed to svg -->
  <SIIcon :icon="vueIcon" width="100" height="100" :color="'#' + vueIcon.hex" />
</template>

<script>
  import SIIcon from '@si-components/vue'
  // import icon from simple-icons
  import vueIcon from 'simple-icons/icons/vuedotjs'

  export default {
    name: 'Component',
    components: {
      SIIcon,
    },
    data() {
      return {
        vueIcon,
      }
    },
  }
</script>
```
