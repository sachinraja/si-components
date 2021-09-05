# @si-components/preact

[simple-icons](https://github.com/simple-icons/simple-icons) component for Preact

## Installation

```shell
npm i @si-components/preact simple-icons
```

`simple-icons` must be installed as a peer dependency.

## Usage

```js
import SIIcon from '@si-components/preact'
// import icon from simple-icons
import reactIcon from 'simple-icons/icons/react'

const Component = () => (
  <>
    {/* pass icon into component */}
    <SIIcon icon={reactIcon} />

    {/* extra attributes are passed to svg */}
    <SIIcon
      icon={reactIcon}
      width="100"
      height="100"
      color={`#${reactIcon.hex}`}
    />
  </>
)
```
