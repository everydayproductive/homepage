import artbeaImgUrl from '~/assets/artbea.jpg'

const Artbea = () => {
  return (
    <div className='mt-5 w-full'>
      <div className='left-0 right-0 z-50 mx-auto w-full max-w-screen-lg flex-col bg-[#EFEFEF] text-black lg:flex lg:flex-row'>
        <div className='z-50 flex items-center justify-center bg-white px-4 pb-5 lg:hidden'>
          <img src={artbeaImgUrl} className='w-[300px]' />
        </div>
        <div className='z-50 p-4 lg:flex-1'>
          <h2 className='text-center font-roboto-mono text-3xl lg:text-left'>
            artbea
          </h2>
          <h3 className='mb-4 text-center font-roboto-mono text-lg lg:text-left'>
            photography
          </h3>
          <p>
            artbea was founded in 2011. Here we display our photography work. We
            print on various media up to A2 on the Canon Pro-1000 printer. Check
            us out at{' '}
            <a
              href='https://artbea.photo'
              target='_blank'
              rel='noreferrer'
              className='text-[#FF6699] hover:underline'
            >
              artbea.photo
            </a>
            .
          </p>
        </div>
        <div className='z-50 hidden items-center justify-center bg-white lg:flex lg:flex-1'>
          <img src={artbeaImgUrl} />
        </div>
      </div>
    </div>
  )
}

export { Artbea }
