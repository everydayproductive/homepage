import { ReactComponent as EPLogo } from '~/assets/ep-logo.svg'
import { ReactComponent as DiscordLogoWhite } from '~/assets/discord-logo-white.svg'
import { ReactComponent as SlackLogoWhite } from '~/assets/Slack_RGB_White.svg'

const App = () => {
  return (
    <div className='flex w-screen flex-col items-center md:justify-center'>
      <div className='mb-8 flex w-screen items-center sm:mb-14 md:justify-center'>
        <div className='w-full max-w-2xl md:w-4/5'>
          <div className='mt-5 flex flex-col items-center justify-center sm:mt-0 sm:flex-row sm:items-end'>
            <div className='flex w-28 items-end pr-5 pb-5 sm:w-36'>
              <EPLogo width='100%' />
            </div>
            <div className='flex items-end justify-end'>
              <div className='w-min-content flex flex-col items-center bg-[#459ED0] p-5 font-roboto-mono text-3xl font-light text-white sm:items-start sm:pt-28 sm:pl-10 sm:pr-3 sm:pb-5 sm:text-5xl'>
                <p>Creative</p>
                <p>Constraints</p>
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
        <div className='w-full max-w-2xl overflow-x-visible px-5 md:px-0'>
          <div className='flex w-full flex-col sm:flex-row lg:w-[120%]'>
            <div className='flex w-full font-roboto-mono text-[0.5rem] font-light text-white sm:w-3/4 sm:justify-between md:w-4/5 md:text-xs'>
              <div className='flex min-w-min flex-col py-2 pr-3'>
                <h1 className='whitespace-nowrap text-xs sm:text-sm'>
                  Everyday Productive
                </h1>
                <h2 className='mt-2 mb-1 font-bold'>Visiting address:</h2>
                <p className='whitespace-pre-line leading-tight'>
                  {`Microlab
                    Kastanjelaan 400
                    5616LZ Eindhoven`}
                </p>
                <div className='flex flex-col py-3 sm:hidden'>
                  <p className='whitespace-nowrap'>KVK: 51982277</p>
                  <p className='whitespace-nowrap'>BTW: NL002447038B96</p>
                  <p className='whitespace-nowrap sm:mt-4'>
                    Koningskinderen 29
                  </p>
                  <p className='whitespace-nowrap'>5629KC Eindhoven</p>
                </div>
              </div>
              <div className='ml-10 flex flex-col py-2 pr-3 sm:ml-0'>
                <h1 className='text-xs sm:text-sm'>Contact</h1>
                <h2 className='mt-2'>info@everydayproductive.com</h2>
                <div className='flex flex-col sm:flex-row sm:items-center'>
                  <a
                    className='block sm:mb-5 sm:mr-2'
                    href='https://discord.com/invite/Sq5bgwpwWs'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='w-20 sm:w-32 sm:pr-5'>
                      <DiscordLogoWhite width='100%' height={40} />
                    </div>
                  </a>
                  <a
                    className='mb-5 block'
                    href='https://join.slack.com/t/everydayproductive/shared_invite/zt-1j8ilbdcj-bZawEy2UfTz6FTrN5xYowQ'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='w-24 pr-5 sm:w-28'>
                      <SlackLogoWhite width='100%' height={40} />
                    </div>
                  </a>
                </div>
              </div>
              <div className='hidden items-center justify-end bg-white px-2 lg:flex'>
                <EPLogo width={80} />
              </div>
            </div>
            <div className='hidden font-roboto-mono text-[0.5rem] font-light text-white sm:ml-5 sm:flex sm:text-xs'>
              <div className='flex flex-col py-3'>
                <p className='whitespace-nowrap'>KVK: 51982277</p>
                <p className='whitespace-nowrap'>BTW: NL002447038B96</p>
                <p className='whitespace-nowrap sm:mt-4'>Koningskinderen 29</p>
                <p className='whitespace-nowrap'>5629KC Eindhoven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
