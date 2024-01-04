import {
  HomeContainer,
  PostsList,
  PostsSection,
  ProfileSection,
  SectionHeader,
} from './styles'
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { apiGithubSearch } from '../../lib/axios'
import { Controller, useForm } from 'react-hook-form'

interface IPost {
  id: number
  title: string
  body: string
  created_at: string
}

interface IFormSearchInput {
  search: string
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const { handleSubmit, control } = useForm<IFormSearchInput>()

  async function handleSearchPosts(data: IFormSearchInput) {
    await fetchPosts(data.search)
  }

  async function fetchPosts(postQuery: string = '') {
    const query = `${postQuery} repo:pejamp/github-blog-ignite-challenge`
    const response = await apiGithubSearch.get('', {
      params: {
        q: query,
      },
    })
    setPosts(response.data.items)
    console.log(response)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

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
        <PostsList>
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard
                title={post.title}
                createdAt={post.created_at}
                content={post.body}
              />
            </li>
          ))}
        </PostsList>
      </PostsSection>
    </HomeContainer>
  )
}
