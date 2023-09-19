import fixedGearImgUrl from '~/assets/fixed-gear.jpg'

const FixedGear = () => {
  return (
    <div className='relative left-0 top-0 mt-5 w-screen'>
      <div className='absolute left-1/2 z-0 hidden h-full w-1/2 bg-[#EFEFEF] text-white lg:block' />
      <div className='left-0 right-0 z-50 mx-auto w-4/5 max-w-screen-lg flex-col bg-[#EFEFEF] text-black lg:flex lg:flex-row'>
        <div className='z-50 flex items-center justify-center bg-white px-4 pb-5 lg:flex-[3] xl:flex-1'>
          <img src={fixedGearImgUrl} className='w-[300px]' />
        </div>
        <div className='z-50 p-4 lg:flex-[5] xl:flex-1'>
          <h2 className='text-center font-roboto-mono text-3xl lg:text-left'>
            Fixed Gear
          </h2>
          <h3 className='mb-4 text-center font-roboto-mono text-lg lg:text-left'>
            Superb Biking Experience
          </h3>
          <p>
            In a fixed gear bike, your back wheel sprocket is fixed. It means,
            that as long as your back wheel turns, so do your pedals. When your
            bike moves, so do your legs. Sounds scary?
          </p>
          <p className='mt-4'>More info coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export { FixedGear }
