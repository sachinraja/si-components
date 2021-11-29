# @si-components/react

React component for [simple-icons](https://github.com/simple-icons/simple-icons)

## Installation

```shell
npm install @si-components/react simple-icons
```

`simple-icons` must be installed as a peer dependency.

## Usage

```js
import SIIcon from '@si-components/react'
// import icon from simple-icons
import { siReact } from 'simple-icons/icons'

const Component = () => (
  <>
    {/* pass icon into component */}
    <SIIcon icon={siReact} />

    {/* extra attributes are passed to svg */}
    <SIIcon icon={siReact} width={100} height={100} color={`#${siReact.hex}`} />
  </>
)
```
