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

// const OurProjects = ({ children }: { children: ReactNode }) => {
//   return (
//     <div className='flex flex-col items-start justify-start max-w-2xl w-full mt-5'>
//       <div className='w-full md:w-auto text-center text-5xl p-5 md:pr-24 bg-[#459ED0] text-white font-light'>
//         Our projects
//       </div>
//       <div className='relative w-[120%] bg-[#EFEFEF] -left-[20%] top-0 mt-5 h-20'>
//         <div className='ml-[20%] bg-black w-20 text-white'>H</div>
//       </div>
//       {children}
//     </div>
//   )
// }

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
        <FrontenFabriek />
        <Artbea />
      </OurProjects>
      <Footer />
    </Layout>
  )
}

export default App
