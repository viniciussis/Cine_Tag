import styles from './NotFound.module.scss'
import notFound from '@/assets/images/not-found.png'
import Title from '@/components/Title'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Title>Página não encontrada!!</Title>
      <img className={styles.notFound__banner} src={notFound} alt="Page Not Found" />
    </div>
  )
}

export default NotFound
