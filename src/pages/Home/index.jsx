import styles from './Home.module.scss'
import Title from '@/components/Title'
import Banner from '@/components/Banner'
import videos from '../../json/db.json'
import Card from '../../components/Card'

const Home = () => {

  console.log(videos)
  return (
    <div className={styles.home}>
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      {videos.map((video) => {
        return <Card video={video} key={video.id} />
      })}
    </div>
  )
}

export default Home
