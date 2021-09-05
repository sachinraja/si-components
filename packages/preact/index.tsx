import { JSX } from 'preact'
import { SimpleIcon } from 'simple-icons'

type SIIconProps = Omit<JSX.SVGAttributes<SVGSVGElement>, 'icon'> & {
  icon: SimpleIcon
  title?: string
}

const SIIcon = ({ icon, title, ...props }: SIIconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    {title && <title>{title}</title>}
    <path d={icon.path} />
  </svg>
)

export default SIIcon
