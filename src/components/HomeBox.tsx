import { ReactComponent as HomeBoxSvg } from '~/assets/home-box.svg'

const HomeBox = () => {
  return (
    <div className='mt-5 w-full'>
      <div className='left-0 right-0 z-50 mx-auto w-full max-w-screen-lg flex-col bg-[#EFEFEF] text-black lg:flex lg:flex-row'>
        <div className='z-50 flex items-center justify-center bg-white px-4 pb-5 lg:hidden'>
          <HomeBoxSvg className='h-[300px] w-[501px] lg:h-[200px] lg:w-[334px] xl:h-[300px] xl:w-[501px]' />
        </div>
        <div className='z-50 p-4 lg:flex-1'>
          <h2 className='text-center font-roboto-mono text-3xl lg:text-left'>
            Home Box
          </h2>
          <h3 className='mb-4 text-center font-roboto-mono text-lg lg:text-left'>
            Home Application Platform
          </h3>
          <p>
            Home Box is our new project that builds on Identity Box. It is an
            application platform allowing for uniform management of your
            inteligent home installations, solar energy and (bi-directional) car
            charing.
          </p>
          <p className='mt-4'>More info coming soon...</p>
        </div>
        <div className='z-50 hidden items-center justify-center bg-white p-2 lg:flex lg:flex-1'>
          <HomeBoxSvg className='h-[300px] w-[501px] lg:h-[200px] lg:w-[334px] xl:h-[300px] xl:w-[501px]' />
        </div>
      </div>
    </div>
  )
}

export { HomeBox }
