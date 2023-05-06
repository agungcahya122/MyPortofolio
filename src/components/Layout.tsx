import React, { FC } from 'react'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-full h-screen flex flex-col overflow-auto'>
      <div className='overflow-auto h-full'>{children}</div>
    </div>
  )
}

export default Layout
