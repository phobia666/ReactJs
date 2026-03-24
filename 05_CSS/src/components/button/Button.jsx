import styles from'./Button.module.css'

const button = () => {
  return (
    <div>
        <button className={styles.btn}>
          <span>this is button</span>
        </button>
    </div>
  )
}

export default button