import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'
import { LinkWrapper } from './styles'

interface LinkProps {
  children: ReactNode
  icon: IconProp
  iconSide?: 'left' | 'right'
  url: string
}

export function Link({ children, icon, url, iconSide = 'right' }: LinkProps) {
  return (
    <LinkWrapper to={url} target="_blank">
      {iconSide === 'left' && <FontAwesomeIcon icon={icon} />}
      {children}
      {iconSide === 'right' && <FontAwesomeIcon icon={icon} />}
    </LinkWrapper>
  )
}
