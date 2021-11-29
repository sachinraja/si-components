import { forwardRef, SVGAttributes } from 'react'
import { DefaultProps, defaultProps } from '../core'

type SIIconProps = SVGAttributes<SVGSVGElement> & DefaultProps

const SIIcon = forwardRef<SVGSVGElement, SIIconProps>(
  ({ icon, title = icon.title, ...props }, ref) => (
    <svg ref={ref} {...defaultProps} {...props}>
      {title && <title>{title}</title>}
      <path d={icon.path} />
    </svg>
  ),
)

SIIcon.displayName = 'SIIcon'

export default SIIcon
