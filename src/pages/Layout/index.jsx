import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FavoriteProvider } from '@/contexts/FavoriteContext.jsx'

const Layout = () => {
  return (
    <main>
      <FavoriteProvider>
        <Header />
        <Outlet />
        <Footer />
      </FavoriteProvider>
    </main>
  )
}

export default Layout
