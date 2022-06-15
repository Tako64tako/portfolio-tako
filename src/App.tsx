import React from 'react'
import ScrollUp from './utils/ScrollUp'
import Home from './components/Home'
import {MediaQueryProvider} from './components/provider/Provider'
import './index.css'

const App: React.FC = () => {
  return (
    <>
      <MediaQueryProvider>
        <Home/>
      </MediaQueryProvider>
      <ScrollUp />
    </>
  );
}

export default App;