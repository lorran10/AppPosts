import styles from './Header.module.css';

import logo from '../img/logo.svg'

export function Header(){
return(
    <header className={styles.header}>
    <img src={logo} alt="logotipo" />
    <h1>Commented Network </h1>
    </header>
 );
}






