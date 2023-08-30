import fixedGearImgUrl from '~/assets/fixed-gear.png'

const FixedGear = () => {
  return (
    <div className='mt-5 w-full'>
      <div className='left-0 right-0 z-50 mx-auto w-full max-w-5xl flex-col bg-[#EFEFEF] text-black md:flex md:flex-row'>
        <div className='z-50 flex items-center justify-center bg-white px-4 pb-5 md:hidden'>
          <img src={fixedGearImgUrl} />
        </div>
        <div className='z-50 p-4'>
          <h2 className='text-center font-roboto-mono text-2xl md:text-left'>
            Fixed Gear
          </h2>
          <h3 className='mb-4 text-center font-roboto-mono text-lg md:text-left'>
            Urban Cycling
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            dictum magna consequat augue vestibulum finibus. In hac habitasse
            platea dictumst. Nulla pulvinar a quam sit amet mollis. Donec non
            ligula facilisis, tempor odio at, efficitur metus. Maecenas eu enim
            elementum, semper tortor at, aliquam augue. Nulla rutrum vehicula
            urna, at lacinia dolor convallis in. Pellentesque efficitur congue
            nulla, et venenatis nunc malesuada nec. Vivamus nec dui metus.
            Vestibulum neque nisl, ornare eu vestibulum vel, pulvinar at mi.
            Mauris consequat dui est, sit amet ultricies ipsum egestas eu.
          </p>
        </div>
        <div className='z-50 hidden items-center justify-center bg-white px-4 pb-5 md:flex'>
          <img src={fixedGearImgUrl} />
        </div>
      </div>
    </div>
  )
}

export { FixedGear }
