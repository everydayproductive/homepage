import { ReactComponent as EPLogo } from '~/assets/ep-logo.svg'
import { ReactComponent as DiscordLogoWhite } from '~/assets/discord-logo-white.svg'
import { ReactComponent as SlackLogoWhite } from '~/assets/Slack_RGB_White.svg'

const App = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-[#459ED0] text-4xl text-white'>
      <EPLogo width={300} />
      <a
        className='mt-5'
        href='http://discord.everydayproductive.com'
        target='_blank'
        rel='noreferrer'
      >
        <DiscordLogoWhite width={200} />
      </a>
      <a
        className='mt-5'
        href='http://slack.everydayproductive.com'
        target='_blank'
        rel='noreferrer'
      >
        <SlackLogoWhite width={200} />
      </a>
    </div>
  )
}

export default App
