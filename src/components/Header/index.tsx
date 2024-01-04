import { Link } from 'react-router-dom'
import logoIcon from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <span>
          <img src={logoIcon} alt="GitHub Blog Logo" />
        </span>
      </Link>
    </HeaderContainer>
  )
}
