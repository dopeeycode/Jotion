'use client'

import Spinner from '@/components/spinner'
import { useConvexAuth } from 'convex/react'
import { redirect } from 'next/navigation'
import Navigation from './_components/navigation'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return redirect('/')
  }

  return (
    <div className="h-full flex dark:bg-[#121214]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  )
}

export default MainLayout
