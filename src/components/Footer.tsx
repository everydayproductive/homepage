import { ReactComponent as EPLogo } from '~/assets/ep-logo.svg'
import { ReactComponent as DiscordLogoWhite } from '~/assets/discord-logo-white.svg'
import { ReactComponent as SlackLogoWhite } from '~/assets/Slack_RGB_White.svg'

const Footer = () => (
  <div className='mt-10 flex w-full items-center justify-center bg-[#459ED0] lg:mt-16'>
    <div className='w-[90%] overflow-x-visible px-5 md:px-0'>
      <div className='flex w-full flex-row'>
        <div className='flex w-3/4 flex-col font-roboto-mono text-xs font-light text-white sm:flex-row sm:justify-between md:w-4/5 md:text-xs'>
          <div className='flex min-w-min flex-col px-2 py-2 pr-3'>
            <h1 className='whitespace-nowrap text-xs sm:text-sm'>
              Everyday Productive
            </h1>
            <h2 className='mb-1 mt-2 font-bold'>Visiting address:</h2>
            <p className='whitespace-pre-line leading-tight'>
              {`Microlab
                Kastanjelaan 400
                5616LZ Eindhoven`}
            </p>
            <div className='flex flex-col py-3 md:hidden'>
              <p className='whitespace-nowrap'>KVK: 51982277</p>
              <p className='whitespace-nowrap'>BTW: NL002447038B96</p>
              <p className='whitespace-nowrap sm:mt-4'>Koningskinderen 29</p>
              <p className='whitespace-nowrap'>5629KC Eindhoven</p>
            </div>
          </div>
          <div className='ml-0 flex-col px-2 py-2 pr-10 sm:ml-10 sm:flex'>
            <h1 className='text-xs sm:text-sm'>Contact</h1>
            <div className=':items-center flex flex-col lg:flex-row'>
              <a
                className='block sm:mb-0 sm:mr-2'
                href='https://discord.com/invite/Sq5bgwpwWs'
                target='_blank'
                rel='noreferrer'
              >
                <div className='w-20 sm:w-32 sm:pr-5'>
                  <DiscordLogoWhite width='100%' height={40} />
                </div>
              </a>
              <a
                className='mb-0 block'
                href='https://join.slack.com/t/everydayproductive/shared_invite/zt-1j8ilbdcj-bZawEy2UfTz6FTrN5xYowQ'
                target='_blank'
                rel='noreferrer'
              >
                <div className='w-24 pr-5 sm:w-28'>
                  <SlackLogoWhite width='100%' height={40} />
                </div>
              </a>
            </div>
            <h2 className='mb-2 mt-2'>info@everydayproductive.com</h2>
          </div>
          <div className='hidden bg-white px-2 lg:flex lg:items-center lg:justify-end'>
            <EPLogo width={80} className='my-6' />
          </div>
        </div>
        <div className='hidden pr-2 font-roboto-mono font-light text-white sm:text-xs md:flex lg:ml-5'>
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
