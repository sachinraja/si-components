import { forwardRef, SVGAttributes } from 'react'
import { SimpleIcon } from 'simple-icons'

type SIIconProps = SVGAttributes<SVGSVGElement> & {
  icon: SimpleIcon
  title?: string
}

const SIIcon = forwardRef<SVGSVGElement, SIIconProps>(
  ({ icon, title = icon.title, ...props }, ref) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      ref={ref}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d={icon.path} />
    </svg>
  ),
)

SIIcon.displayName = 'SIIcon'

export default SIIcon
