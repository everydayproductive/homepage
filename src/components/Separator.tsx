const Separator = () => {
  return (
    <div className='flex w-full max-w-2xl justify-center'>
      <div className='mt-5 h-[1px] w-2/5 bg-gradient-to-r from-white to-gray-500' />
      <div className='mt-5 h-[1px] w-2/5 bg-gradient-to-l from-white to-gray-500' />
    </div>
  )
}

export { Separator }
