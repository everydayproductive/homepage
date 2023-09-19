import { Layout } from '~/components/Layout'
import { Header } from '~/components/Header'
import { Intro } from '~/components/Intro'
import { Footer } from '~/components/Footer'
import { IdentityBox } from '~/components/IdentityBox'
import { OurProjects } from '~/components/OurProjects'
import { Separator } from '~/components/Separator'
import { FixedGear } from '~/components/FixedGear'
import { FrontenFabriek } from '~/components/FrontenFabriek'
import { Artbea } from '~/components/Artbea'
import { HomeBox } from './components/HomeBox'

const App = () => {
  return (
    <Layout>
      <Header />
      <Intro />
      <Separator />
      <OurProjects>
        <IdentityBox />
        <HomeBox />
        <FixedGear />
        <Artbea />
        <FrontenFabriek />
      </OurProjects>
      <Footer />
    </Layout>
  )
}

export default App
