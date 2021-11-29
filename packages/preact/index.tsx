import { JSX } from 'preact'
import { SimpleIcon } from 'simple-icons'
import { DefaultProps, defaultProps } from '../core'

type SIIconProps = Omit<JSX.SVGAttributes<SVGSVGElement>, 'icon'> & DefaultProps

const SIIcon = ({ icon, title, ...props }: SIIconProps) => (
  <svg {...defaultProps} {...props}>
    {title && <title>{title}</title>}
    <path d={icon.path} />
  </svg>
)

export default SIIcon
