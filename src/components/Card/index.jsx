import styles from './Card.modules.scss'
import favoriteIcon from '@/assets/images/favorite.png'

const Card = ({ id, title, cover }) => {
  return (
    <div className={styles.card}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
      <img src={favoriteIcon} alt="To Favorite Icon" />
    </div>
  )
}

export default Card
