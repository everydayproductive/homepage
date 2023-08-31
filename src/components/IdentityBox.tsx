import { ReactComponent as IdBoxLogo } from '~/assets/id-box.svg'

const IdentityBox = () => {
  return (
    <div className='relative left-0 top-0 mt-5 w-screen'>
      <div className='absolute left-0 z-0 hidden h-full w-[50vw] bg-[#EFEFEF] text-white lg:block' />
      <div className='left-0 right-0 z-50 mx-auto w-4/5 max-w-screen-lg flex-col bg-[#EFEFEF] text-black lg:flex lg:flex-row'>
        <div className='z-50 flex items-center justify-center bg-white px-4 pb-5 lg:flex-[2]'>
          <IdBoxLogo className='w-[150px] lg:w-[200px]' />
        </div>
        <div className='z-50 p-4 lg:flex-[5]'>
          <h2 className='text-center font-roboto-mono text-3xl lg:text-left'>
            Identity Box
          </h2>
          <h3 className='mb-4 text-center font-roboto-mono text-lg lg:text-left'>
            Decentralized Web of the Future
          </h3>
          <p>
            Identity Box is your personal P2P networking node giving you access
            to the global network of distributed storage, digital identity, and
            even more in the future.
          </p>
          <p className='mt-4'>
            Read more at{' '}
            <a
              href='https://idbox.online'
              target='_blank'
              rel='noreferrer'
              className='text-[#459ED0] hover:underline'
            >
              idbox.online
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export { IdentityBox }
