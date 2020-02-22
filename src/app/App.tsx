import React from 'react'
import './App.css'

import Header from './templates/Header'
import Contact from './features/Contact'

export interface IAppProps {}

const App: React.FC<IAppProps> = () => (
  <>
    <Header />
    <Contact />
  </>
)

export default App
