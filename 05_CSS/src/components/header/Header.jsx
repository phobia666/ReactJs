import styles from './Header.module.css'

const header = () => {
  return (
    <div className={styles.header}>
        <h2>CSS Study</h2>
        <button>Login</button>
    </div>
  )
}

export default header