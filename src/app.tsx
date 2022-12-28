import { FC } from 'react'
import HomePage from './pages/home'
import Layout from './components/layout'

const App: FC = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default App
