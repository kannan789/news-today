import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ArticleList from './components/ArticleList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArticleList />
    </>
  )
}

export default App
