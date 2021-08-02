import type { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { Summary } from '../components/Summary';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Summary />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
