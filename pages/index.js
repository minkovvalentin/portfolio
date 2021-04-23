import styles from './styles/About.module.scss'

export default function About() {
  return (
    <div className={styles.container}>
      {/* TO DO 
       Add head tag. Probably in _documents or _app
       Use proper HTML tags (Main/Footer/h1/h2) instead of divs and h1 only
      */}

      <div className={styles.introduction}>
        <img src="me.jpg" alt="Girl in a jacket" width="500" height="600"  className={styles.image} />
        <p  className={styles['text-container']}>My name is Valentin Minkov.<br/>
I am 25 years old web developer living in Munich, Germany.</p>
      </div>
      <div className={styles.description}>
        <p>
          My main strength is  building modern web applications using 
            <span className={styles.keyword}> React</span>,
            <span className={styles.keyword}> Angular</span>,
            <span className={styles.keyword}> Typescript </span>
            and 
            <span className={styles.keyword}> Nodejs</span>.
        </p>
        <p> Additionally, I have worked with 
            <span className={styles.keyword}> GraphQL</span>,
            <span className={styles.keyword}> REST</span>,
            <span className={styles.keyword}> SQL</span>,
            <span className={styles.keyword}> Next.js</span>,
            <span className={styles.keyword}> Ionic </span>
            and <span className={styles.keyword}> Xamarin</span>.
        </p>
      </div>
    </div>
  )
}
