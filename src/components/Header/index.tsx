import logoIcon from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIcon} alt="GitHub Blog Logo" />
      </span>
    </HeaderContainer>
  )
}
