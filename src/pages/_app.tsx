
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { Transactions } from '../components/Transactions';

import '../styles/global.scss';
import { useState } from 'react';
import { NewTransactionModal } from '../components/NewTransactionModal';

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
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
