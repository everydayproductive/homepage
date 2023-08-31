import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => (
  <div className='flex w-screen justify-center'>
    <div className='flex w-4/5 max-w-screen-lg flex-col items-center md:justify-center'>
      {children}
    </div>
  </div>
)

export { Layout }
