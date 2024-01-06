import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProfileProvider } from './contexts/ProfileContext'
import { PostsProvider } from './contexts/PostsContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProfileProvider>
        <PostsProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PostsProvider>
      </ProfileProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
