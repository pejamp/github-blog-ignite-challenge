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
import { apiGithubUser } from '../../lib/axios'
import { useCallback, useEffect, useState } from 'react'

interface IUser {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState({} as IUser)

  const fetchUserData = useCallback(async () => {
    const response = await apiGithubUser.get('pejamp')
    setUser(response.data)
    console.log(response.data)
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

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
