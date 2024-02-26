import styles from './Banner.module.scss'

const Banner = ({ image }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(/src/assets/images/banner-${image}.png)` }}
    ></div>
  )
}

export default Banner
