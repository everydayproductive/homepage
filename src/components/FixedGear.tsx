import fixedGearImgUrl from '~/assets/fixed-gear.jpg'

const FixedGear = () => {
  return (
    <div className='mt-5 w-full'>
      <div className='left-0 right-0 z-50 mx-auto w-full flex-col bg-[#EFEFEF] text-black lg:flex lg:flex-row'>
        <div className='z-50 flex items-center justify-center bg-white px-4 pb-5 lg:hidden'>
          <img src={fixedGearImgUrl} className='w-[300px]' />
        </div>
        <div className='z-50 flex-[5] p-4'>
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
        <div className='z-50 hidden items-center justify-center bg-white px-4 pb-5 lg:flex lg:flex-[3]'>
          <img src={fixedGearImgUrl} />
        </div>
      </div>
    </div>
  )
}

export { FixedGear }
