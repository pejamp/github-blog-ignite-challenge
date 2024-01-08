import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProfileProvider } from './contexts/ProfileContext'
import { PostsProvider } from './contexts/PostsContext'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SkeletonTheme baseColor="#1C2F41" highlightColor="#3A536B">
        <ProfileProvider>
          <PostsProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </PostsProvider>
        </ProfileProvider>
      </SkeletonTheme>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
