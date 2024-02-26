import styles from './Player.module.scss'
import Title from '@/components/Title'
import videos from '@/json/db.json'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';

const Player = () => {
  let { id } = useParams();
  
  if (!id) {
    <NotFound />
  }
  
  const [video, setVideo] = useState([])

  useEffect(() => {
    setVideo(videos.filter((vid) => vid.id === Number(id)))
  }, [])



  console.log(video)

  return (
    <div className={styles.container}>
      <Title>Player</Title>
      <iframe
        width="75%"
        height="700px"
        src={video.link}
        title={video.titulo}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Player
