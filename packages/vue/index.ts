import { SimpleIcon } from 'simple-icons'
import { h, defineComponent, PropType } from 'vue'

const SIIcon = defineComponent({
  name: 'si-icon',
  props: {
    icon: { type: Object as PropType<SimpleIcon>, required: true },
    title: String,
  },
  render() {
    return h(
      'svg',
      {
        role: 'img',
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'currentColor',
      },
      [this.title && h('title', this.title), h('path', { d: this.icon.path })],
    )
  },
})

export default SIIcon
