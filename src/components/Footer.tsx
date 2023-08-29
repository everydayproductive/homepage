import { ReactComponent as EPLogo } from '~/assets/ep-logo.svg'
import { ReactComponent as DiscordLogoWhite } from '~/assets/discord-logo-white.svg'
import { ReactComponent as SlackLogoWhite } from '~/assets/Slack_RGB_White.svg'

const Footer = () => (
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
              <p className='whitespace-nowrap sm:mt-4'>Koningskinderen 29</p>
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
)

export { Footer }
