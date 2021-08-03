import styles from './styles.module.scss';

export function Summary() {
    return (
        <div className={styles.containerCard}>
            <div className={`${styles.card} ${styles.income}`}>
                <header>
                    <p>Entradas</p>
                    <img src="assets/income.svg" alt="Entradas" />
                </header>
                <strong>10.000,00</strong>
            </div>
            <div className={`${styles.card} ${styles.outcome}`}>
                <header>
                    <p>Saídas</p>
                    <img src="assets/outcome.svg" alt="Saídas" />
                </header>
                <strong>3.000,00</strong>
            </div>
            <div className={`${styles.card} ${styles.wallet}`}>
                <header>
                    <p>Carteira</p>
                    <img src="assets/wallet.svg" alt="Carteira" />
                </header>
                <strong>7.000,00</strong>
            </div>
        </div>
    )
}