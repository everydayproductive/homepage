import reactLogo, { ReactComponent as Logo } from '~/assets/react.svg'
import { ReactComponent as DiscordLogo } from '~/assets/discord-logo-black.svg'

const App = () => {
  console.log('reactLogo=', reactLogo)
  return (
    <div className='h-screen w-screen flex-col items-center justify-center bg-blue-700 text-4xl text-white
    flex'>
      <img src={reactLogo} alt='React SVG' />
      Test 2
      <Logo />
      <div className='w-[200px] border border-black'>
        <DiscordLogo width={200} />
      </div>
    </div>
  )
}

export default App
