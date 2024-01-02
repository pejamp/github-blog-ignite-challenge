import { Input } from '../../components/Input'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import {
  HomeContainer,
  PostsList,
  PostsSection,
  ProfileSection,
  SectionHeader,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileSection>
        <Profile />
      </ProfileSection>
      <PostsSection>
        <SectionHeader>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </SectionHeader>
        <form>
          <Input />
        </form>
        <PostsList>
          <li>
            <PostCard />
          </li>
          <li>
            <PostCard />
          </li>
          <li>
            <PostCard />
          </li>
          <li>
            <PostCard />
          </li>
        </PostsList>
      </PostsSection>
    </HomeContainer>
  )
}
