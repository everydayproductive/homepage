import { Layout } from '~/components/Layout'
import { Header } from '~/components/Header'
import { Intro } from '~/components/Intro'
import { Footer } from '~/components/Footer'

const App = () => {
  return (
    <Layout>
      <Header />
      <Intro />
      <Footer />
    </Layout>
  )
}

export default App
