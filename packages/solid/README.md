# @si-components/solid

Solid component for [simple-icons](https://github.com/simple-icons/simple-icons)

## Installation

```shell
npm install @si-components/solid simple-icons
```

`simple-icons` must be installed as a peer dependency.

## Usage

```js
import SIIcon from '@si-components/solid'
// import icon from simple-icons
import { siSolid } from 'simple-icons/icons'

const Component = () => (
  <>
    {/* pass icon into component */}
    <SIIcon icon={siSolid} />

    {/* extra attributes are passed to svg */}
    <SIIcon icon={siSolid} width={100} height={100} color={`#${siSolid.hex}`} />
  </>
)
```
