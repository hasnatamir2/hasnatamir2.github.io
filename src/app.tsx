import { FC } from 'react'
import HomePage from './pages/home'
import Layout from './components/layout'
import Cursor from './components/cursor'

const App: FC = () => {
  return (
    <>
      <Cursor />
      <Layout>
        <HomePage />
      </Layout>
    </>
  )
}

export default App
