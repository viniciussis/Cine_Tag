import styles from './Home.module.scss'
import Title from '@/components/Title'
import Banner from '@/components/Banner'

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner image='home' />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
    </div>
  )
}

export default Home
