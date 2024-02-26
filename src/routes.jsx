import './main.scss'
import '@/assets/styles/normalize.scss'
import '@/assets/styles/typography.scss'
import '@/assets/styles/reset.scss'

import Home from '@/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import Player from './pages/Player'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
