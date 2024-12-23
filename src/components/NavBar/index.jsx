import styles from './NavBar.module.css';
import logo from '/logo.png';
import NavBarLink from './NavBarLink';

function NavBar() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo do alura flix" />

            <div className={styles.botoes}>
                <NavBarLink to='/'>Home</NavBarLink>
                <NavBarLink to='novo_video'>Novo Vídeo</NavBarLink>
            </div>
        </header>
    )
}

export default NavBar;