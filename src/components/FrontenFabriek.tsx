import frontenFabriekImgUrl from '~/assets/fronten-fabriek.jpg'

const FrontenFabriek = () => {
  return (
    <div className='relative left-0 top-0 mt-5 w-screen'>
      <div className='absolute left-0 z-0 hidden h-full w-full bg-[#EFEFEF] text-white lg:block' />
      <div className='left-0 right-0 z-50 mx-auto w-4/5 max-w-screen-lg flex-col bg-[#EFEFEF] text-black lg:flex lg:flex-row'>
        <div className='z-50 flex items-center justify-center bg-white px-4 pb-5 lg:flex-1'>
          <img src={frontenFabriekImgUrl} className='w-[300px]' />
        </div>
        <div className='z-50 p-4 lg:flex-1'>
          <h2 className='text-center font-roboto-mono text-3xl lg:text-left'>
            Fronten Fabriek
          </h2>
          <h3 className='mb-4 text-center font-roboto-mono text-lg lg:text-left'>
            Creative Woodworking
          </h3>
          <p>
            Building your kitchen does not have to brake your budget. At Fronten
            Fabriek we explore a more sustainable ways of building various
            kitchen elements from affordable materials, yet still having
            personal and professional look and feel.
          </p>
          <p className='mt-4'>More info coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export { FrontenFabriek }
