import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => (
  <div className='flex w-screen flex-col items-center md:justify-center'>
    {children}
  </div>
)

export { Layout }
