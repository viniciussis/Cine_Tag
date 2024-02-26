import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import favoriteIcon from '@/assets/images/favorite.png'
import unFavoriteIcon from '@/assets/images/unfavorite.png'
import { useFavoriteContext } from '@/hooks/useFavoriteContext.jsx'

const Card = ({ video }) => {
  const { favorites, addFavorite } = useFavoriteContext()
  const isFavorite = favorites.some((favorite) => favorite.id === video.id)
  const icon = isFavorite ? favoriteIcon : unFavoriteIcon
  return (
    <div className={styles.card}>
      <Link className={styles.card__link} to={`/${video.id}`}>
        <img
          className={styles.link__cover}
          src={video.cover}
          alt={video.title}
        />
        <h2>{video.title}</h2>
      </Link>
      <img src={icon} alt="To Favorite Icon" onClick={addFavorite(video)} />
    </div>
  )
}

export default Card
