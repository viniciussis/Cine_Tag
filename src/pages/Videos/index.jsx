import styles from './Videos.module.scss'

const Videos = () => {
  return (
    <div className={styles.container}>
      <iframe
        width="100%"
        height="700"
        src="https://www.youtube.com/embed/t8NqwxeGVyY?si=LjaKj72EpYRjHJ1O"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Videos
