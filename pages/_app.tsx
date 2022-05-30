import type { AppProps } from 'next/app'
import GlobalProivider from '../src/contexts'
import '../utils/reset.css'

const App = ({ 
  Component, 
  pageProps 
} : AppProps) => {

  return (
      <GlobalProivider>
        <Component {...pageProps} />
      </GlobalProivider>
  )
}

export default App