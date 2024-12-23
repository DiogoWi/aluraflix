import { NavLink } from "react-router-dom";
import styles from './NavBarLink.module.css';

function NavBarLink({ to, children }) {
    return (
        <NavLink to={to} className={({ isActive }) => `${isActive ? styles.ativo : ""}`}>{children}</NavLink>
    )
}

export default NavBarLink;