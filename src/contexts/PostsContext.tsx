import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { apiGithubSearch } from '../lib/axios'
import { AxiosError } from 'axios'

interface IPost {
  number: number
  title: string
  body: string
  created_at: string
}

interface PostsContextType {
  posts: IPost[]
  postsError: boolean
  fetchPosts: (query: string) => Promise<void>
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([])
  const [postsError, setPostsError] = useState(false)

  const fetchPosts = useCallback(async (postQuery: string = '') => {
    const query = `${postQuery} repo:pejamp/github-blog-ignite-challenge`
    try {
      const response = await apiGithubSearch.get('', {
        params: {
          q: query,
        },
      })
      setPosts(response.data.items)
      console.log(response)
    } catch (error: unknown) {
      const newError = error as AxiosError
      if (newError.response?.status === 404) {
        setPostsError(true)
      }
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts, postsError }}>
      {children}
    </PostsContext.Provider>
  )
}

export function usePosts() {
  return useContext(PostsContext)
}
