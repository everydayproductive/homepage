import { ReactComponent as EPLogo } from '~/assets/ep-logo.svg'
import { ReactComponent as DiscordLogoWhite } from '~/assets/discord-logo-white.svg'
import { ReactComponent as SlackLogoWhite } from '~/assets/Slack_RGB_White.svg'

const App = () => {
  return (
    <div className='flex w-screen flex-col items-center md:justify-center'>
      <div className='mb-14 flex w-screen items-center md:justify-center'>
        <div className='w-full max-w-2xl md:w-4/5'>
          <div className='flex justify-center'>
            <div className='flex items-end pr-5 pb-5'>
              <EPLogo width={130} />
            </div>
            <div className='flex items-end justify-end'>
              <div className='w-min-content whitespace-pre-line bg-[#459ED0] pt-28 pl-10 pr-3 pb-5 font-roboto-mono text-5xl font-light text-white'>
                {'Creative\nConstraints'}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full max-w-2xl px-5 font-roboto-mono text-xs leading-relaxed md:w-4/5 md:px-0'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        dictum magna consequat augue vestibulum finibus. In hac habitasse platea
        dictumst. Nulla pulvinar a quam sit amet mollis. Donec non ligula
        facilisis, tempor odio at, efficitur metus. Maecenas eu enim elementum,
        semper tortor at, aliquam augue. Nulla rutrum vehicula urna, at lacinia
        dolor convallis in. Pellentesque efficitur congue nulla, et venenatis
        nunc malesuada nec. Vivamus nec dui metus. Vestibulum neque nisl, ornare
        eu vestibulum vel, pulvinar at mi. Mauris consequat dui est, sit amet
        ultricies ipsum egestas eu.
      </div>
      <div className='mt-16 flex w-full items-center justify-center bg-[#459ED0]'>
        <div className='flex w-full max-w-2xl overflow-y-visible px-5 md:px-0'>
          <div className='flex w-3/4 justify-between font-roboto-mono text-xs font-light text-white md:w-4/5'>
            <div className='flex flex-col py-2 pr-3'>
              <h1>Everyday Productive</h1>
              <h2 className='mt-2 text-[0.5rem] font-bold'>
                Visiting address:
              </h2>
              <p className='whitespace-pre-line text-[0.5rem] leading-tight'>
                {`Microlab
                  Kastanjelaan 400
                  5616LZ Eindhoven`}
              </p>
            </div>
            <div className='flex flex-col py-2 pr-3'>
              <h1>Contact</h1>
              <h2 className='mt-2 text-[0.5rem]'>
                info@everydayproductive.com
              </h2>
              <div className='flex items-center'>
                <a
                  className='mr-2 block'
                  href='https://discord.com/invite/Sq5bgwpwWs'
                  target='_blank'
                  rel='noreferrer'
                >
                  <DiscordLogoWhite width={60} height='auto' />
                </a>
                <a
                  className='block'
                  href='https://join.slack.com/t/everydayproductive/shared_invite/zt-1j8ilbdcj-bZawEy2UfTz6FTrN5xYowQ'
                  target='_blank'
                  rel='noreferrer'
                >
                  <SlackLogoWhite width={50} height='auto' />
                </a>
              </div>
            </div>
            <div className='invisible flex items-center justify-end bg-white px-2 md:visible'>
              <EPLogo width={80} />
            </div>
          </div>
          <div className='ml-5 flex font-roboto-mono text-xs font-light text-white'>
            <div className='flex flex-col py-3'>
              <p className='whitespace-pre-line text-[0.5rem] leading-tight'>
                {`KVK: 51982277
                  BTW: NL002447038B96`}
              </p>
              <p className='mt-4 whitespace-pre-line text-[0.5rem] leading-tight'>
                {`Koningskinderen 29
                  5629KC Eindhoven`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
