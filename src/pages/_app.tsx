import type { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { Transactions } from '../components/Transactions';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Summary />
      <Transactions />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
