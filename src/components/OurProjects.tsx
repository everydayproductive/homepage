import { ReactNode } from 'react'

const OurProjects = ({ children }: { children: ReactNode }) => {
  return (
    <div className='mt-5 flex w-full flex-col items-center justify-start'>
      <div className='mt-5 flex w-full items-start justify-start'>
        <div className='w-full bg-[#459ED0] p-8 text-center font-roboto-mono text-5xl font-light text-white md:w-auto md:pr-24'>
          Our projects
        </div>
      </div>
      {children}
    </div>
  )
}

export { OurProjects }
