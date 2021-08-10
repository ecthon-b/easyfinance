import styles from './styles.module.scss';

interface TransactionsProps {
    income: number;
    outcome: number;
    total: number;
    description: string;

}

const transaction = {
    income: 4000,
    outcome: 300,
    total: 3700,
    description: "Notebook novo"
}

export function Transactions(transaction: TransactionsProps) {

    return (
        <div className={styles.container}>
            <h1 className={styles.srOnly}>Transações</h1>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.id}>1</div>
                    <div className={styles.description}>Monitor</div>
                    <div className={styles.value}>
                        <span>Valor</span>
                        <p>{transaction.income}</p>
                    </div>
                    <div className={styles.value}>
                        <span>Data</span>
                        <p>04/02/1991</p>
                    </div>
                    <div className={`${styles.actions} ${styles.flex}`}>
                        <a className={`${styles.button} ${styles.white}`} href=""><img src="assets/edit-24.svg" alt="Editar transação" /></a>
                        <button className={`${styles.button} ${styles.white}`}><img src="assets/trash-24.svg" alt="Apagar transação" /></button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.id}>1</div>
                    <div className={styles.description}>Cadeira de escritório</div>
                    <div className={styles.value}>
                        <span>Valor</span>
                        <p>R$ 350,00</p>
                    </div>
                    <div className={styles.value}>
                        <span>Data</span>
                        <p>04/02/1991</p>
                    </div>
                    <div className={`${styles.actions} ${styles.flex}`}>
                        <a className={`${styles.button} ${styles.white}`} href=""><img src="assets/edit-24.svg" alt="Editar transação" /></a>
                        <button className={`${styles.button} ${styles.white}`}><img src="assets/trash-24.svg" alt="Apagar transação" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}