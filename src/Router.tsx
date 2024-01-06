import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post/'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} errorElement={<div>page error</div>} />
        <Route
          path="/post/:postNumber/*"
          element={<Post />}
          errorElement={<NotFound />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
