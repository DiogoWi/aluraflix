import styles from './Footer.module.css';
import logo from '/logo.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="logo do alura flix" />
        </footer>
    )
}

export default Footer;