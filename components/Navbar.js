import styles from './styles/Navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const paths = ['/', '/experience', '/projects', 'contact'];

const Navbar = () => {
    const router = useRouter()

    return(
        <div className={styles.container}>
            <h1>{router.pathname}</h1>
      
            <Link href="/" className={styles.container}>
                <a>About</a>
            </Link>
            <Link href="/experience" className={styles.active}>
                <a>Experience</a>
            </Link>
            <Link href="/projects" className={styles.active}>
                <a>Projects</a>
            </Link>
            <Link href="/contact" className={styles.active}>
                <a>Contact</a>
            </Link>
        </div>
    );
}

export default Navbar;