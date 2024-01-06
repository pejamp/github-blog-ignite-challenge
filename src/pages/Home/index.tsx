import { Input } from '../../components/Input'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { Controller, useForm } from 'react-hook-form'
import { usePosts } from '../../contexts/PostsContext'
import {
  HomeContainer,
  NotFound,
  PostsList,
  PostsSection,
  ProfileSection,
  SectionHeader,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

interface IFormSearchInput {
  search: string
}

export function Home() {
  const { posts, fetchPosts, postsError } = usePosts()
  const { handleSubmit, control } = useForm<IFormSearchInput>()

  async function handleSearchPosts(data: IFormSearchInput) {
    await fetchPosts(data.search)
  }

  return (
    <HomeContainer>
      <ProfileSection>
        <Profile />
      </ProfileSection>
      <PostsSection>
        <SectionHeader>
          <h2>Publicações</h2>
          <span>
            {posts.length} {posts.length > 1 ? 'publicações' : 'publicação'}
          </span>
        </SectionHeader>
        <form onSubmit={handleSubmit(handleSearchPosts)}>
          <Controller
            control={control}
            name="search"
            rules={{
              required: true,
              minLength: 1,
            }}
            render={({ field: { onChange } }) => <Input onChange={onChange} />}
          />
        </form>
        {!postsError && posts.length > 0 ? (
          <PostsList>
            {posts.map((post) => (
              <li key={post.number}>
                <PostCard
                  postNumber={post.number}
                  title={post.title}
                  createdAt={post.created_at}
                  content={post.body}
                />
              </li>
            ))}
          </PostsList>
        ) : (
          <NotFound>
            <FontAwesomeIcon icon={faCircleXmark} />
            <h2>Nenhuma publicação foi encontrada</h2>
          </NotFound>
        )}
      </PostsSection>
    </HomeContainer>
  )
}
