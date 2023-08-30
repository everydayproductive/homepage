import { ReactComponent as IdBoxLogo } from '~/assets/id-box.svg'

const FrontenFabriek = () => {
  return (
    <div className='relative left-0 top-0 mt-5 w-full'>
      <div className='absolute left-0 z-0 hidden h-full w-full bg-[#EFEFEF] text-white md:block' />
      <div className='left-0 right-0 z-50 mx-auto w-full max-w-2xl flex-col bg-[#EFEFEF] text-black md:flex md:flex-row'>
        <div className='z-50 flex items-center justify-center bg-white px-4 pb-5'>
          <IdBoxLogo width='150px' />
        </div>
        <div className='z-50 p-4'>
          <h2 className='text-center font-roboto-mono text-2xl md:text-left'>
            Fronten Fabriek
          </h2>
          <h3 className='mb-4 text-center font-roboto-mono text-lg md:text-left'>
            Creative Woodworking
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
      </div>
    </div>
  )
}

export { FrontenFabriek }
