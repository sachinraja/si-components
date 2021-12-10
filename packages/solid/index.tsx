import { Component, JSX } from 'solid-js'
import { DefaultProps, defaultProps } from '../../core'

type SIIconProps = JSX.SvgSVGAttributes<SVGSVGElement> & DefaultProps

const SIIcon: Component<SIIconProps> = ({ icon, title, ref, ...props }) => (
  <svg ref={ref} {...defaultProps} {...props}>
    {title && <title>{title}</title>}
    <path d={icon.path} />
  </svg>
)

export default SIIcon
