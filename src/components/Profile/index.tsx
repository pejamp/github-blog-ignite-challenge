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

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage>
        <img src="/avatar.png" alt="" />
      </ProfileImage>

      <ProfileInfo>
        <HeaderInfo>
          <h1>Name</h1>
          <Link icon={faArrowUpRightFromSquare}>github</Link>
        </HeaderInfo>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <FooterInfo>
          <BioInfo>
            <FontAwesomeIcon icon={faGithub} />
            name
          </BioInfo>
          <BioInfo>
            <FontAwesomeIcon icon={faBuilding} />
            name
          </BioInfo>
          <BioInfo>
            <FontAwesomeIcon icon={faUserGroup} />
            name
          </BioInfo>
        </FooterInfo>
      </ProfileInfo>
    </ProfileContainer>
  )
}
