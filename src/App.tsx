import React from 'react'
import ScrollUp from './utils/ScrollUp'
import Home from './components/Home'
import './index.css'

const App: React.FC = () => {
  return (
    <>
    <section>
        <Home/>
    </section>
      <ScrollUp />
    </>
  );
}

export default App;