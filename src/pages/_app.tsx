import Modal from 'react-modal';
import type { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { Transactions } from '../components/Transactions';

import '../styles/global.scss';
import { useState } from 'react';

Modal.setAppElement('#root');

function MyApp({ Component, pageProps }: AppProps) {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Summary />
      <Transactions />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar nova transação</h2>
      </Modal>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
