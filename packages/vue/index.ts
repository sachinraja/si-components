import { SimpleIcon } from 'simple-icons'
import { h, defineComponent, PropType } from 'vue'
import { defaultProps } from '../../core'

const SIIcon = defineComponent({
  name: 'si-icon',
  props: {
    icon: { type: Object as PropType<SimpleIcon>, required: true },
    title: String,
  },
  render() {
    return h('svg', defaultProps, [
      this.title && h('title', this.title),
      h('path', { d: this.icon.path }),
    ])
  },
})

export default SIIcon
