import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__media}>
        <a
          href="https://www.linkedin.com/in/viniciussis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/icons/linkedin.svg" alt="linkedin link" />
        </a>
        <a
          href="https://github.com/viniciussis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/icons/github.svg" alt="github link" />
        </a>
        <a
          href="https://www.instagram.com/_devinicius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/icons/instagram.svg" alt="instagram link" />
        </a>
        <a
          href="https://twitter.com/_devinicius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/icons/twitter.svg" alt="twitter link" />
        </a>
      </div>
      <p className={styles.footer__para}>
        &copy;Copyright | Project created by Vinícius Silva Santos | 2024
      </p>
    </footer>
  )
}

export default Footer
