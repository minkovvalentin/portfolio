import styles from './styles/Navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const paths = ['/', '/experience', '/projects', '/contact'];


const Navbar = () => {
    const router = useRouter()

    return(
        <div className={`${styles.container}`}>
            {paths.map((path)=> {
                console.log(router.pathname === path)
                return (
                    <div className={ path === router.pathname ? styles.active : '' } key={path}>
                        <Link href={path}>
                            <a>
                                {path === '/' && 'About'}
                                {path !== '/' &&
                                path.replace('/','').capitalize()
                                }
                            </a>
                        </Link>
                    </div>
                )
                }
            )}
        </div>
    );
}

export default Navbar;