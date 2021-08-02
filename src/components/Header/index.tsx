import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <a href="">LOGO</a>
                <nav>
                    <a href="">Login</a>
                </nav>
            </div>
        </header>
    )
}