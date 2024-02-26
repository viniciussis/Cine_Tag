import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '@/assets/images/logo.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="Logo do Cine Tag" />
      </Link>
      <nav className={styles.header__menu}>
        <Link className={styles.menu__link} to='./'>
          Home
        </Link>
        <Link className={styles.menu__link} to='./favorites'>
          Favorites
        </Link>
      </nav>
    </header>
  )
}

export default Header
