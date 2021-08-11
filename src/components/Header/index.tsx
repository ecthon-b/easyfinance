import styles from './styles.module.scss';


interface HeaderProps {
onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    
    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <a href="/"><img src="assets/logo.png" alt="Easy Finance Logo" /></a>
                    <nav>
                        <a href="">Login</a>
                    </nav>
                    <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
                </div>
            </header>
            
        </>
    )
}