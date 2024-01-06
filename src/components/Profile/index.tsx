import { Link } from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import {
  BioInfo,
  FooterInfo,
  HeaderInfo,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
} from './styles'
import { useProfile } from '../../contexts/ProfileContext'

export function Profile() {
  const { user } = useProfile()

  return (
    <ProfileContainer>
      <ProfileImage>
        <img src={user.avatar_url} alt={user.name} />
      </ProfileImage>

      <ProfileInfo>
        <HeaderInfo>
          <h1>{user.name}</h1>
          <Link icon={faArrowUpRightFromSquare} url={user.html_url}>
            github
          </Link>
        </HeaderInfo>
        <p>{user.bio}</p>
        <FooterInfo>
          <BioInfo>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </BioInfo>
          <BioInfo>
            <FontAwesomeIcon icon={faBuilding} />
            {user.company || 'não mencionado'}
          </BioInfo>
          <BioInfo>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers > 1
              ? `${user.followers} seguidores`
              : `${user.followers} seguidor`}
          </BioInfo>
        </FooterInfo>
      </ProfileInfo>
    </ProfileContainer>
  )
}
