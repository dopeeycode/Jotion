import React from 'react'
import NavBar from './_components/navbar'

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-fit dark:bg-[#121214]">
      <NavBar />
      <main className="h-screen pt-40">{children}</main>
    </div>
  )
}

export default MarketingLayout
