import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { apiGithubUser } from '../lib/axios'

interface IUser {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

interface ProfileContextType {
  user: IUser
  isLoading: boolean
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [user, setUser] = useState({} as IUser)
  const [isLoading, setIsLoading] = useState(true)

  const fetchUserData = useCallback(async () => {
    const response = await apiGithubUser.get('pejamp')
    setUser(response.data)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  return (
    <ProfileContext.Provider value={{ user, isLoading }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  return useContext(ProfileContext)
}
