import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'
import { LinkWrapper } from './styles'

interface LinkProps {
  children: ReactNode
  icon: IconProp
  iconSide?: 'left' | 'right'
}

export function Link({ children, icon, iconSide = 'right' }: LinkProps) {
  return (
    <LinkWrapper>
      {iconSide === 'left' && <FontAwesomeIcon icon={icon} />}
      {children}
      {iconSide === 'right' && <FontAwesomeIcon icon={icon} />}
    </LinkWrapper>
  )
}
