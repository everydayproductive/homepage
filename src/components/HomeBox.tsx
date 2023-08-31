import { ReactComponent as HomeBoxSvg } from '~/assets/home-box.svg'

const HomeBox = () => {
  return (
    <div className='relative left-0 top-0 mt-5 w-screen'>
      <div className='absolute left-1/2 z-0 hidden h-full w-full bg-[#EFEFEF] text-white lg:block' />
      <div className='left-0 right-0 z-50 mx-auto w-4/5 max-w-screen-lg flex-col bg-[#EFEFEF] text-black lg:flex lg:flex-row'>
        <div className='z-50 flex items-center justify-center bg-white px-4 pb-5 lg:flex-[3] xl:flex-1'>
          <HomeBoxSvg className='h-[300px] w-[501px] lg:h-[200px] lg:w-[334px] xl:h-[300px] xl:w-[501px]' />
        </div>
        <div className='z-50 p-4 lg:flex-[5] xl:flex-1'>
          <h2 className='text-center font-roboto-mono text-3xl lg:text-left'>
            Home Box
          </h2>
          <h3 className='mb-4 text-center font-roboto-mono text-lg lg:text-left'>
            Home Application Platform
          </h3>
          <p>
            Home Box is our new project that builds on Identity Box. It is an
            application platform allowing for uniform management of your
            inteligent home installations, solar energy and car charing.
          </p>
          <p className='mt-4'>More info coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export { HomeBox }
