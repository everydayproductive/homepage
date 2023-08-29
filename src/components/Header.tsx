import { ReactComponent as EPLogo } from '~/assets/ep-logo.svg'

const Header = () => (
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
)

export { Header }
