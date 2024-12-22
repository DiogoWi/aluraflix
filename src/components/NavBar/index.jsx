import styles from './NavBar.module.css';
import logo from '/logo.png';

function NavBar() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo do alura flix" />

            <div className={styles.botoes}>
                <button className={styles.ativo}>Home</button>
                <button>Novo Vídeo</button>
            </div>
        </header>
    )
}

export default NavBar;